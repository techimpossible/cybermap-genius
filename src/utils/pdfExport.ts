
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { SecurityControl } from '@/contexts/AssessmentContext';

export const exportToPDF = (controls: SecurityControl[], overallScore: number, implementationGroupProgress: any[], controlsByStatus: any[]) => {
  // Create a new PDF document
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.width;
  
  // Add title
  doc.setFontSize(20);
  doc.setTextColor(0, 51, 102);
  doc.text('Security Controls Assessment Report', pageWidth / 2, 20, { align: 'center' });
  
  // Add date
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.text(`Generated on: ${new Date().toLocaleDateString()}`, pageWidth / 2, 27, { align: 'center' });
  
  // Add overall score
  doc.setFontSize(14);
  doc.setTextColor(0, 0, 0);
  doc.text('Overall Assessment Score', 14, 40);
  doc.setFontSize(24);
  doc.setTextColor(overallScore >= 3.5 ? 34, 139, 34 : overallScore >= 2 ? 255, 165, 0 : 220, 53, 69);
  doc.text(`${overallScore}/5`, 14, 50);
  
  // Add summary metrics
  doc.setFontSize(14);
  doc.setTextColor(0, 0, 0);
  doc.text('Implementation Status', 14, 65);
  
  // Status summary
  const statusData = controlsByStatus.map(status => [status.name, `${status.value}%`]);
  autoTable(doc, {
    startY: 70,
    head: [['Status', 'Percentage']],
    body: statusData,
    theme: 'grid',
    headStyles: { fillColor: [0, 51, 102] },
    margin: { left: 14 },
    tableWidth: 80,
  });
  
  // Implementation Group Progress
  doc.text('Implementation Group Progress', 120, 65);
  const igData = implementationGroupProgress.map(ig => [ig.name, `${ig.percentage}%`]);
  autoTable(doc, {
    startY: 70,
    head: [['Group', 'Progress']],
    body: igData,
    theme: 'grid',
    headStyles: { fillColor: [0, 51, 102] },
    margin: { left: 120 },
    tableWidth: 80,
  });
  
  // Add controls table
  doc.setFontSize(14);
  doc.setTextColor(0, 0, 0);
  doc.text('Security Controls Assessment', 14, 115);
  
  // Map scores to text descriptions
  const getScoreText = (score?: number) => {
    if (score === undefined) return 'Not Scored';
    switch(score) {
      case 0: return 'Not Implemented (0)';
      case 1: return 'Initial (1)';
      case 2: return 'Developing (2)';
      case 3: return 'Defined (3)';
      case 4: return 'Managed (4)';
      case 5: return 'Optimized (5)';
      default: return `Score: ${score}`;
    }
  };
  
  // Prepare data for controls table, grouped by category
  const categories = [...new Set(controls.map(c => c.category))];
  
  let startY = 120;
  
  categories.forEach(category => {
    const categoryControls = controls.filter(c => c.category === category);
    
    doc.setFontSize(12);
    doc.setTextColor(0, 51, 102);
    doc.text(category, 14, startY);
    startY += 5;
    
    const tableData = categoryControls.map(control => [
      control.id,
      control.name,
      getScoreText(control.score),
      control.status || 'Not Set',
      control.nistMapping.join(', ')
    ]);
    
    autoTable(doc, {
      startY,
      head: [['ID', 'Control', 'Score', 'Status', 'NIST Mapping']],
      body: tableData,
      theme: 'grid',
      headStyles: { fillColor: [0, 51, 102] },
      columnStyles: {
        0: { cellWidth: 20 },
        1: { cellWidth: 60 },
        2: { cellWidth: 30 },
        3: { cellWidth: 30 },
        4: { cellWidth: 40 }
      },
      margin: { left: 14 },
      didDrawPage: (data) => {
        // Add page numbers at the bottom
        const pageCount = doc.internal.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
          doc.setPage(i);
          doc.setFontSize(10);
          doc.setTextColor(100, 100, 100);
          doc.text(
            `Page ${i} of ${pageCount}`,
            pageWidth / 2,
            doc.internal.pageSize.height - 10,
            { align: 'center' }
          );
        }
      }
    });
    
    startY = (doc as any).lastAutoTable.finalY + 10;
    
    // Add a new page if we're running out of space
    if (startY > doc.internal.pageSize.height - 40) {
      doc.addPage();
      startY = 20;
    }
  });
  
  // Add notes for each control that has notes
  doc.addPage();
  doc.setFontSize(14);
  doc.setTextColor(0, 0, 0);
  doc.text('Assessment Notes', 14, 20);
  
  startY = 30;
  
  controls.filter(c => c.notes && c.notes.trim() !== '').forEach(control => {
    // Add control header
    doc.setFontSize(12);
    doc.setTextColor(0, 51, 102);
    doc.text(`${control.id} - ${control.name}`, 14, startY);
    startY += 6;
    
    // Add notes
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    
    // Split the note text to fit the page width
    const textLines = doc.splitTextToSize(control.notes || '', pageWidth - 30);
    
    // Check if we need a new page
    if (startY + textLines.length * 5 > doc.internal.pageSize.height - 20) {
      doc.addPage();
      startY = 20;
    }
    
    doc.text(textLines, 14, startY);
    startY += textLines.length * 5 + 10; // Add some padding
  });
  
  // Save the PDF
  doc.save(`security-assessment-report-${new Date().toISOString().split('T')[0]}.pdf`);
};

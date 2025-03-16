
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { SecurityControl } from '@/contexts/AssessmentContext';

export const exportToPDF = (
  controls: SecurityControl[], 
  overallScore: number, 
  implementationGroupProgress: { name: string; percentage: number; color: string }[], 
  controlsByStatus: { name: string; value: number; color: string }[]
) => {
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
  
  // Add framework breakdown
  const cisControls = controls.filter(c => c.framework === 'CIS');
  const nistControls = controls.filter(c => c.framework === 'NIST');
  
  doc.setFontSize(14);
  doc.setTextColor(0, 0, 0);
  doc.text('Framework Coverage', 14, 40);
  
  doc.setFontSize(10);
  doc.text(`CIS Controls: ${cisControls.length} controls`, 14, 50);
  doc.text(`NIST 800-53: ${nistControls.length} controls`, 14, 58);
  
  // Add overall score
  doc.setFontSize(14);
  doc.setTextColor(0, 0, 0);
  doc.text('Overall Assessment Score', 120, 40);
  doc.setFontSize(24);
  doc.setTextColor(overallScore >= 3.5 ? 34 : overallScore >= 2 ? 255 : 220, 
                   overallScore >= 3.5 ? 139 : overallScore >= 2 ? 165 : 53, 
                   overallScore >= 3.5 ? 34 : overallScore >= 2 ? 0 : 69);
  doc.text(`${overallScore}/5`, 120, 50);
  
  // Add summary metrics
  doc.setFontSize(14);
  doc.setTextColor(0, 0, 0);
  doc.text('Implementation Status', 14, 75);
  
  // Status summary
  const statusData = controlsByStatus.map(status => [status.name, `${status.value}%`]);
  autoTable(doc, {
    startY: 80,
    head: [['Status', 'Percentage']],
    body: statusData,
    theme: 'grid',
    headStyles: { fillColor: [0, 51, 102] },
    margin: { left: 14 },
    tableWidth: 80,
  });
  
  // Implementation Group Progress
  doc.text('Implementation Group Progress', 120, 75);
  const igData = implementationGroupProgress.map(ig => [ig.name, `${ig.percentage}%`]);
  autoTable(doc, {
    startY: 80,
    head: [['Group', 'Progress']],
    body: igData,
    theme: 'grid',
    headStyles: { fillColor: [0, 51, 102] },
    margin: { left: 120 },
    tableWidth: 80,
  });
  
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
  
  // Add CIS controls table
  doc.addPage();
  doc.setFontSize(18);
  doc.setTextColor(0, 51, 102);
  doc.text('CIS Controls Assessment', pageWidth / 2, 20, { align: 'center' });
  
  // Prepare data for CIS controls table, grouped by category
  const cisCategories = [...new Set(cisControls.map(c => c.category))].sort();
  
  let startY = 30;
  
  cisCategories.forEach(category => {
    const categoryControls = cisControls.filter(c => c.category === category);
    
    doc.setFontSize(12);
    doc.setTextColor(0, 51, 102);
    doc.text(category, 14, startY);
    startY += 5;
    
    const tableData = categoryControls.map(control => [
      control.id,
      control.name.length > 40 ? control.name.substring(0, 40) + '...' : control.name,
      getScoreText(control.score),
      control.status || 'Not Set',
      control.implementationLevel
    ]);
    
    autoTable(doc, {
      startY,
      head: [['ID', 'Control', 'Score', 'Status', 'Level']],
      body: tableData,
      theme: 'grid',
      headStyles: { fillColor: [0, 51, 102] },
      columnStyles: {
        0: { cellWidth: 25 },
        1: { cellWidth: 60 },
        2: { cellWidth: 35 },
        3: { cellWidth: 35 },
        4: { cellWidth: 25 }
      },
      margin: { left: 14 },
      didDrawPage: (data) => {
        // Add page numbers at the bottom
        const pageCount = doc.getNumberOfPages();
        doc.setFontSize(10);
        doc.setTextColor(100, 100, 100);
        doc.text(
          `Page ${data.pageNumber} of ${pageCount}`,
          pageWidth / 2,
          doc.internal.pageSize.height - 10,
          { align: 'center' }
        );
        
        // Add header on each page
        if (data.pageNumber > 1 && startY === 30) {
          doc.setFontSize(18);
          doc.setTextColor(0, 51, 102);
          doc.text('CIS Controls Assessment (continued)', pageWidth / 2, 20, { align: 'center' });
        }
      }
    });
    
    startY = (doc as any).lastAutoTable.finalY + 10;
    
    // Add a new page if we're running out of space
    if (startY > doc.internal.pageSize.height - 40) {
      doc.addPage();
      startY = 30;
    }
  });
  
  // Add NIST controls table
  doc.addPage();
  doc.setFontSize(18);
  doc.setTextColor(0, 51, 102);
  doc.text('NIST 800-53 Controls Assessment', pageWidth / 2, 20, { align: 'center' });
  
  // Prepare data for NIST controls table, grouped by category
  const nistCategories = [...new Set(nistControls.map(c => c.category))].sort();
  
  startY = 30;
  
  nistCategories.forEach(category => {
    const categoryControls = nistControls.filter(c => c.category === category);
    
    doc.setFontSize(12);
    doc.setTextColor(0, 51, 102);
    doc.text(category, 14, startY);
    startY += 5;
    
    const tableData = categoryControls.map(control => [
      control.id,
      control.name.length > 40 ? control.name.substring(0, 40) + '...' : control.name,
      getScoreText(control.score),
      control.status || 'Not Set',
      control.implementationLevel
    ]);
    
    autoTable(doc, {
      startY,
      head: [['ID', 'Control', 'Score', 'Status', 'Level']],
      body: tableData,
      theme: 'grid',
      headStyles: { fillColor: [0, 51, 102] },
      columnStyles: {
        0: { cellWidth: 25 },
        1: { cellWidth: 60 },
        2: { cellWidth: 35 },
        3: { cellWidth: 35 },
        4: { cellWidth: 25 }
      },
      margin: { left: 14 },
      didDrawPage: (data) => {
        // Add page numbers at the bottom
        const pageCount = doc.getNumberOfPages();
        doc.setFontSize(10);
        doc.setTextColor(100, 100, 100);
        doc.text(
          `Page ${data.pageNumber} of ${pageCount}`,
          pageWidth / 2,
          doc.internal.pageSize.height - 10,
          { align: 'center' }
        );
        
        // Add header on each page
        if (data.pageNumber > 1 && startY === 30) {
          doc.setFontSize(18);
          doc.setTextColor(0, 51, 102);
          doc.text('NIST 800-53 Controls Assessment (continued)', pageWidth / 2, 20, { align: 'center' });
        }
      }
    });
    
    startY = (doc as any).lastAutoTable.finalY + 10;
    
    // Add a new page if we're running out of space
    if (startY > doc.internal.pageSize.height - 40) {
      doc.addPage();
      startY = 30;
    }
  });
  
  // Add notes for each control that has notes
  doc.addPage();
  doc.setFontSize(18);
  doc.setTextColor(0, 51, 102);
  doc.text('Assessment Notes', pageWidth / 2, 20, { align: 'center' });
  
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
      startY = 30;
    }
    
    doc.text(textLines, 14, startY);
    startY += textLines.length * 5 + 10; // Add some padding
  });
  
  // Ensure all page numbers are correct
  const pageCount = doc.getNumberOfPages();
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
  
  // Save the PDF
  doc.save(`security-assessment-report-${new Date().toISOString().split('T')[0]}.pdf`);
};

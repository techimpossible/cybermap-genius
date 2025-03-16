
import React from "react";
import { Button } from "@/components/ui/button";
import { useAssessment } from "@/contexts/AssessmentContext";
import { Save, RefreshCw, Download, Upload } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const AssessmentActions = () => {
  const { saveAssessment, loadAssessment, resetAssessment, controls } = useAssessment();

  const handleExport = () => {
    const data = JSON.stringify(controls, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `security-assessment-${new Date().toISOString().split("T")[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const importedControls = JSON.parse(content);
        // Validate the imported data (simple check)
        if (Array.isArray(importedControls) && importedControls.length > 0 && importedControls[0].id) {
          localStorage.setItem("securityControls", content);
          loadAssessment();
        }
      } catch (error) {
        console.error("Error importing assessment:", error);
      }
    };
    reader.readAsText(file);
    // Reset the file input
    event.target.value = "";
  };

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <Button variant="outline" size="sm" onClick={saveAssessment} className="flex items-center gap-1">
        <Save className="h-4 w-4" /> Save Assessment
      </Button>
      
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <RefreshCw className="h-4 w-4" /> Reset Assessment
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will reset all scores and notes to their default values. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={resetAssessment}>Reset</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      
      <Button variant="outline" size="sm" onClick={handleExport} className="flex items-center gap-1">
        <Download className="h-4 w-4" /> Export
      </Button>
      
      <Button variant="outline" size="sm" className="flex items-center gap-1" asChild>
        <label className="cursor-pointer">
          <Upload className="h-4 w-4" /> Import
          <input 
            type="file" 
            accept=".json" 
            className="hidden" 
            onChange={handleImport}
          />
        </label>
      </Button>
    </div>
  );
};

export default AssessmentActions;

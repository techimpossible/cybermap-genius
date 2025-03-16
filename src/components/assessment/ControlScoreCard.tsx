
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, Clock, CalendarClock, AlertCircle } from "lucide-react";
import { useAssessment, SecurityControl } from "@/contexts/AssessmentContext";
import { toast } from "sonner";

interface ControlScoreCardProps {
  control: SecurityControl;
}

const ControlScoreCard: React.FC<ControlScoreCardProps> = ({ control }) => {
  const { updateControlScore, updateControlStatus, updateControlNotes } = useAssessment();
  const [notes, setNotes] = useState(control.notes || "");
  const [isEditing, setIsEditing] = useState(false);
  
  const handleScoreChange = (value: string) => {
    updateControlScore(control.id, parseInt(value));
    toast.success(`Score updated for ${control.id}`);
  };
  
  const handleStatusChange = (value: string) => {
    updateControlStatus(control.id, value as "implemented" | "in-progress" | "planned" | "not-implemented");
    toast.success(`Status updated for ${control.id}`);
  };
  
  const handleSaveNotes = () => {
    updateControlNotes(control.id, notes);
    setIsEditing(false);
    toast.success("Notes saved");
  };

  const getStatusIcon = () => {
    switch (control.status) {
      case "implemented":
        return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      case "in-progress":
        return <Clock className="h-4 w-4 text-amber-500" />;
      case "planned":
        return <CalendarClock className="h-4 w-4 text-blue-500" />;
      case "not-implemented":
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = () => {
    switch (control.status) {
      case "implemented":
        return "text-green-500";
      case "in-progress":
        return "text-amber-500";
      case "planned":
        return "text-blue-500";
      case "not-implemented":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  const getImplementationLevelBadge = (level: string) => {
    switch (level) {
      case "IG1":
        return "bg-green-100 text-green-800";
      case "IG2":
        return "bg-blue-100 text-blue-800";
      case "IG3":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="border-gray-200 mb-4">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <span 
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getImplementationLevelBadge(control.implementationLevel)}`}
            >
              {control.implementationLevel}
            </span>
            <span className={`text-sm font-medium flex items-center gap-1 ${getStatusColor()}`}>
              {getStatusIcon()}
              {control.status === "implemented" && "Implemented"}
              {control.status === "in-progress" && "In Progress"}
              {control.status === "planned" && "Planned"}
              {control.status === "not-implemented" && "Not Implemented"}
            </span>
          </div>
          <span className="text-sm font-mono bg-gray-100 px-2 py-0.5 rounded">
            {control.id}
          </span>
        </div>
        <CardTitle className="text-lg mt-2">{control.name}</CardTitle>
        <CardDescription>{control.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <h4 className="text-sm font-medium text-gray-700">Assessment Score</h4>
              <span className="text-sm text-gray-500">
                {control.score !== undefined ? `${control.score}/5` : "Not scored"}
              </span>
            </div>
            <RadioGroup 
              defaultValue={control.score?.toString()} 
              className="flex space-x-1"
              onValueChange={handleScoreChange}
            >
              {[0, 1, 2, 3, 4, 5].map((score) => (
                <div key={score} className="flex items-center space-x-1">
                  <RadioGroupItem 
                    value={score.toString()} 
                    id={`score-${control.id}-${score}`} 
                    className="sr-only"
                  />
                  <Label
                    htmlFor={`score-${control.id}-${score}`}
                    className={`h-8 w-8 flex items-center justify-center rounded-full cursor-pointer border ${
                      control.score === score 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-background hover:bg-muted'
                    }`}
                  >
                    {score}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Implementation Status</h4>
            <Select 
              defaultValue={control.status} 
              onValueChange={handleStatusChange}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="implemented">Implemented</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="planned">Planned</SelectItem>
                <SelectItem value="not-implemented">Not Implemented</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-sm font-medium text-gray-700">Assessment Notes</h4>
              {!isEditing && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setIsEditing(true)}
                >
                  Edit
                </Button>
              )}
            </div>
            
            {isEditing ? (
              <div className="space-y-2">
                <Textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Add notes about implementation, evidence, or remediation plans..."
                  className="min-h-24"
                />
                <div className="flex justify-end space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => {
                      setNotes(control.notes || "");
                      setIsEditing(false);
                    }}
                  >
                    Cancel
                  </Button>
                  <Button size="sm" onClick={handleSaveNotes}>
                    Save Notes
                  </Button>
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 p-3 rounded-md min-h-[60px]">
                {control.notes ? control.notes : <span className="text-gray-400 italic">No notes added</span>}
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
            <span className="text-sm font-medium text-gray-500">NIST SP 800-53:</span>
            {control.nistMapping.map(mapping => (
              <span 
                key={mapping} 
                className="inline-flex items-center px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 rounded"
              >
                {mapping}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ControlScoreCard;

import React from "react";
import { BarChart2, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TOTAL_REQUIRED_REPORTS = 10;
const uploadedReports = 8; // This would be dynamic in a real app

const progressPercent = Math.round(
  (uploadedReports / TOTAL_REQUIRED_REPORTS) * 100
);

const Progress: React.FC = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <BarChart2 className="w-8 h-8 text-purple-600" />
        <CardTitle>Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600" />
            <span className="font-medium">
              {uploadedReports} / {TOTAL_REQUIRED_REPORTS} Reports Uploaded
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
            <div
              className="bg-purple-600 h-3 rounded-full transition-all"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className="text-right text-sm text-gray-500 mt-1">
            {progressPercent}% Complete
          </div>
        </div>
        <div className="text-gray-600">
          Progress is calculated based on the number of PDF reports uploaded. Upload more reports to increase your completion rate!
        </div>
      </CardContent>
    </Card>
  );
};

export default Progress;
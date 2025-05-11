import React, { useRef, useState } from "react";
import { FileText, UploadCloud } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Report {
  id: number;
  name: string;
  uploadedAt: string;
}

const Reports: React.FC = () => {
  const [reports, setReports] = useState<Report[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const file = files[0];
    if (file && file.type === "application/pdf") {
      setReports((prev) => [
        ...prev,
        {
          id: Date.now(),
          name: file.name,
          uploadedAt: new Date().toLocaleString(),
        },
      ]);
    } else {
      alert("Only PDF files are allowed.");
    }
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div>
      <Card className="mb-6">
        <CardHeader className="flex flex-row items-center gap-4">
          <FileText className="w-8 h-8 text-blue-600" />
          <CardTitle>Upload PDF Report</CardTitle>
        </CardHeader>
        <CardContent>
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf"
            className="hidden"
            onChange={handleFileChange}
            id="pdf-upload"
          />
          <label htmlFor="pdf-upload">
            <Button asChild className="cursor-pointer">
              <span>
                <UploadCloud className="w-4 h-4 mr-2" />
                Upload PDF
              </span>
            </Button>
          </label>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Uploaded Reports</CardTitle>
        </CardHeader>
        <CardContent>
          {reports.length === 0 ? (
            <div className="text-gray-500">No reports uploaded yet.</div>
          ) : (
            <ul className="divide-y">
              {reports.map((report) => (
                <li key={report.id} className="py-2 flex items-center gap-3">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <span className="font-medium">{report.name}</span>
                  <span className="ml-auto text-xs text-gray-400">
                    {report.uploadedAt}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;
import React from "react";
import { FileText, Users, BarChart2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const mockStats = {
  reports: 8,
  users: 4,
  progress: 75,
};

const Overview: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Reports Card */}
      <Card
        className="cursor-pointer hover:shadow-lg transition"
        onClick={() => navigate("/dashboard/reports")}
      >
        <CardHeader className="flex flex-row items-center gap-4">
          <FileText className="w-8 h-8 text-blue-600" />
          <CardTitle>Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">{mockStats.reports}</div>
          <div className="text-sm text-gray-500">Uploaded PDF Reports</div>
        </CardContent>
      </Card>

      {/* Users Card */}
      <Card
        className="cursor-pointer hover:shadow-lg transition"
        onClick={() => navigate("/dashboard/users")}
      >
        <CardHeader className="flex flex-row items-center gap-4">
          <Users className="w-8 h-8 text-green-600" />
          <CardTitle>Users</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">{mockStats.users}</div>
          <div className="text-sm text-gray-500">Active Users</div>
        </CardContent>
      </Card>

      {/* Progress Card */}
      <Card
        className="cursor-pointer hover:shadow-lg transition"
        onClick={() => navigate("/dashboard/progress")}
      >
        <CardHeader className="flex flex-row items-center gap-4">
          <BarChart2 className="w-8 h-8 text-purple-600" />
          <CardTitle>Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">{mockStats.progress}%</div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div
              className="bg-purple-600 h-2 rounded-full"
              style={{ width: `${mockStats.progress}%` }}
            />
          </div>
          <div className="text-sm text-gray-500 mt-1">Completion Rate</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Overview;
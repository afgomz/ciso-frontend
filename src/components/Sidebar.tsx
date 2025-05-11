
import React from "react";
import {
  LayoutDashboard,
  FileText,
  Users,
  BarChart2,
  LogOut,
  UserCircle,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  onLogout: () => void;
  userName?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ onLogout, userName }) => {
  return (
    <aside className="hidden md:flex flex-col w-64 bg-white border-r min-h-screen">
      <div className="flex items-center justify-center h-16 border-b">
        <LayoutDashboard className="w-6 h-6 text-blue-600" />
        <span className="ml-2 text-lg font-bold">CISO</span>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        <NavLink
          to="/dashboard/overview"
          className={({ isActive }) =>
            `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive
              ? "bg-blue-100 text-blue-700"
              : "text-gray-700 hover:bg-gray-100"
            } cursor-pointer`
          }
        >
          <LayoutDashboard className="w-5 h-5" />
          <span className="ml-2">Overview</span>
        </NavLink>
        <NavLink
          to="/dashboard/reports"
          className={({ isActive }) =>
            `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive
              ? "bg-blue-100 text-blue-700"
              : "text-gray-700 hover:bg-gray-100"
            } cursor-pointer`
          }
        >
          <FileText className="w-5 h-5" />
          <span className="ml-2">Reports</span>
        </NavLink>
        <NavLink
          to="/dashboard/users"
          className={({ isActive }) =>
            `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive
              ? "bg-blue-100 text-blue-700"
              : "text-gray-700 hover:bg-gray-100"
            } cursor-pointer`
          }
        >
          <Users className="w-5 h-5" />
          <span className="ml-2">Users</span>
        </NavLink>
        <NavLink
          to="/dashboard/progress"
          className={({ isActive }) =>
            `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive
              ? "bg-blue-100 text-blue-700"
              : "text-gray-700 hover:bg-gray-100"
            } cursor-pointer`
          }
        >
          <BarChart2 className="w-5 h-5" />
          <span className="ml-2">Progress</span>
        </NavLink>
      </nav>
      <div className="px-4 py-4 border-t">
        <div className="flex items-center space-x-2 mb-2">
          <UserCircle className="w-6 h-6" />
          <span className="text-sm font-medium">{userName}</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="w-full flex items-center justify-center cursor-pointer"
          onClick={onLogout}
        >
          <LogOut className="w-4 h-4 mr-2" />
          Cerrar sesión
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;

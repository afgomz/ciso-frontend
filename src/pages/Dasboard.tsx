import { Outlet, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import {
  CircleUser,
  Menu,
  Package2,
  Search,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export default function Dashboard() {
  const { user, logout } = useAuth0();

  return (
    <div className="flex min-h-screen w-full">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r">
        <div className="flex items-center justify-center h-16 border-b">
          <Package2 className="w-6 h-6 text-blue-600" />
          <span className="ml-2 text-lg font-bold">CISO</span>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-4">
          <NavLink
            to="settings"
            className={({ isActive }) =>
              `flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                isActive
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <Menu className="w-5 h-5" />
            <span className="ml-2">Settings</span>
          </NavLink>
          {/* TODO: add more links: General, Security, Integrations… */}
        </nav>

        {/* User Profile + Logout */}
        <div className="px-4 py-4 border-t">
          <div className="flex items-center space-x-2">
            <CircleUser className="w-6 h-6" />
            <span className="text-sm font-medium">{user?.name}</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="mt-3 w-full flex items-center justify-center"
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Cerrar sesión
          </Button>
        </div>
      </aside>

      {/* Mobile Sidebar (Sheet) */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden m-4">
            <Menu className="w-5 h-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          {/* replicate sidebar links & logout here for mobile */}
        </SheetContent>
      </Sheet>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between px-4 py-2 border-b bg-gray-50">
          {/* Search */}
          <form className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-2 top-2 w-4 h-4 text-gray-400" />
              <Input type="search" placeholder="Buscar..." className="pl-8 w-full" />
            </div>
          </form>

          {/* Profile Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Perfil</DropdownMenuItem>
              <DropdownMenuItem>Soporte</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Cerrar sesión
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        <main className="flex-1 overflow-auto p-6 bg-gray-100">
          {/* Nested pages (Settings, etc.) will render here */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}

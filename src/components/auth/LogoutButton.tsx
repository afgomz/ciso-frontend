import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@/components/ui/button'
import { LogOut } from 'lucide-react'

export const LogoutButton: React.FC = () => {
  const { logout } = useAuth0()

  return (
    <Button
      variant="outline"
      onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
      className="flex items-center space-x-2"
    >
      <LogOut className="w-5 h-5" />
      <span>Cerrar sesión</span>
    </Button>
  )
}

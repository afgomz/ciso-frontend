import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@/components/ui/button'
import { LogIn } from 'lucide-react'

export const LoginButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <Button onClick={() => loginWithRedirect()} className="flex items-center space-x-2">
      <LogIn className="w-5 h-5" />
      <span>Entrar</span>
    </Button>
  )
}

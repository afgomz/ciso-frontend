import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export const Profile: React.FC = () => {
  const { user, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) return <div>Cargando perfil…</div>

  return (
    isAuthenticated && user && (
      <div className="flex flex-col items-center space-y-2">
        <img src={user.picture} alt={user.name} className="w-16 h-16 rounded-full" />
        <h2 className="text-lg font-medium">{user.name}</h2>
        <p className="text-sm text-muted-foreground">{user.email}</p>
      </div>
    )
  )
}

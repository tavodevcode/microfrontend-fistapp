import { useToast } from '@/components/ui/use-toast'
import { Role } from '@/interfaces/role'
import { API_KEY, SUPABASE_URL, TOKEN } from '@/lib/consts'
import { useEffect, useState } from 'react'

export default function useRoles() {
  const { toast } = useToast()

  const [roles, setRoles] = useState<Role[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    getRoles({})
  }, [])

  const headers: HeadersInit = {
    autorization: `Bearer ${TOKEN}`,
    apikey: API_KEY,
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }

  const getRoles = async ({ isFistLoad = true }: { isFistLoad?: boolean }) => {
    if (isFistLoad) setLoading(true)

    try {
      // throw new Error('Test error message')

      const res = await fetch(`${SUPABASE_URL}/v1/roles`, {
        method: 'GET',
        headers
      })
      const roles = await res.json()

      if (!res.ok) throw new Error(roles.message)

      setRoles(roles)
    } catch (error) {
      setError(error)
    } finally {
      // await new Promise((resolve) => setTimeout(resolve, 2000))

      setLoading(false)
    }
  }

  const deleteRole = async (id: string) => {
    try {
      const res = await fetch(`${SUPABASE_URL}/v1/roles?id=eq.${id}`, {
        method: 'DELETE',
        headers
      })

      if (!res.ok) throw new Error("Couldn't delete role")

      toast({
        description: 'El rol se elimino correctamente!',
        duration: 2000
      })

      await getRoles({ isFistLoad: false })
    } catch (error) {
      toast({
        title: 'Opps!',
        description: 'No se pudo eliminar el rol.',
        variant: 'destructive',
        duration: 2000
      })
    }
  }

  return { roles, loading, error, deleteRole }
}

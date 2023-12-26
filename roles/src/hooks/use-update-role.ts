import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'

import { API_KEY, SUPABASE_URL, TOKEN } from '@/lib/consts'
import { useNavigate, useParams } from 'react-router-dom'
import { Role } from '@/interfaces/role'

export default function useUpdateRole() {
  const params = useParams<{ id: string }>()

  const navigate = useNavigate()

  const [role, setRole] = useState<Role>()
  const [loading, setLoading] = useState<boolean>(false)
  const [loadingForm, setLoadingForm] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)

  const formSchema = z.object({
    role: z
      .string()
      .min(2, 'El rol debe tener al menos 2 caracteres.')
      .max(50, 'El rol no debe de pasar los 50 caracteres.')
  })

  const roleForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      role: ''
    }
  })

  const headers: HeadersInit = {
    autorization: `Bearer ${TOKEN}`,
    apikey: API_KEY,
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }

  useEffect(() => {
    getRole()
  }, [])

  const getRole = async () => {
    try {
      setLoading(true)

      const res = await fetch(`${SUPABASE_URL}/v1/roles?id=eq.${params.id}`, {
        method: 'GET',
        headers
      })

      const data = await res.json()

      if (!res.ok) throw new Error(data.message)

      setRole(data[0])

      roleForm.reset(data[0])
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  const updateRole = async ({ role }: z.infer<typeof formSchema>) => {
    try {
      setLoadingForm(true)

      const res = await fetch(`${SUPABASE_URL}/v1/roles?id=eq.${params.id}`, {
        method: 'PATCH',
        headers,
        body: JSON.stringify({ role })
      })

      const data = await res.json()

      if (!res.ok) throw new Error(data.message)
    } catch (error) {
      setError(error)
    } finally {
      setLoadingForm(false)
    }
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await updateRole(values)

    if (!error) navigate('/roles')
  }

  return { roleForm, onSubmit, loading, error, loadingForm, role }
}

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'

import { API_KEY, SUPABASE_URL, TOKEN } from '@/lib/consts'
import { useNavigate } from 'react-router-dom'

export default function useNewRole() {
  const navigate = useNavigate()

  const [loading, setLoading] = useState<boolean>(false)
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

  const addRole = async ({ role }: z.infer<typeof formSchema>) => {
    try {
      setLoading(true)

      const res = await fetch(`${SUPABASE_URL}/v1/roles?select=created_at`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ role })
      })

      const data = await res.json()

      if (!res.ok) throw new Error(data.message)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await addRole(values)

    if (!error) navigate('/roles')
  }

  return { roleForm, onSubmit, loading, error }
}

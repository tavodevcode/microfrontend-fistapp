import { BadgePlus } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import useNewRole from '@/hooks/use-new-role'
import { ReloadIcon } from '@radix-ui/react-icons'

export const NewRoleForm = () => {
  const { error, loading, roleForm, onSubmit } = useNewRole()

  return (
    <Form {...roleForm}>
      <form onSubmit={roleForm.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={roleForm.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rol</FormLabel>
              <FormControl>
                <Input placeholder="example" {...field} />
              </FormControl>
              <FormDescription>Este es el nombre que le daras al nuevo rol.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="hover:scale-[1.01]" disabled={loading}>
          {loading ? (
            <>
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              Creando rol ...
            </>
          ) : (
            <>
              <BadgePlus className="w-4 h-4 mr-2" /> Crear nuevo rol
            </>
          )}
        </Button>
      </form>
    </Form>
  )
}

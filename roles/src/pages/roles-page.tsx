import { PlusCircle, TableProperties } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { RolesTable } from '@/components/roles/roles-table'
import { Link } from 'react-router-dom'
import { Title } from '@/components/ui/title'

export const RolesPage = () => {
  return (
    <section className="w-screen h-full px-10 pt-10">
      <div className="flex mb-5">
        <Link to={'/roles'} className="disabled">
          <span className="flex gap-2 justify-center items-center font-semibold text-sm opacity-80">
            <TableProperties className="w-4 h-4" />
            Roles
          </span>
        </Link>
      </div>

      <div className="flex justify-between items-center mb-10">
        <Title title="Tabla de roles" />

        <Link to={'/roles/new'}>
          <Button type="button" className="hover:scale-[1.01]">
            <PlusCircle className="mr-2 h-4 w-4" />
            <span>Agregar nuevo rol</span>
          </Button>
        </Link>
      </div>

      <RolesTable />
    </section>
  )
}

import { Link } from 'react-router-dom'
import { ChevronRight, TableProperties } from 'lucide-react'

import { NewRoleForm } from '@/components/roles/new-role-form'
import { Title } from '@/components/ui/title'

export const NewRolesPage = () => {
  return (
    <section className="w-screen h-full px-10 pt-10">
      <div className="flex gap-2 items-center mb-5">
        <Link to={'/roles'} className="disabled">
          <span className="flex gap-2 justify-center items-center font-semibold text-sm opacity-80">
            <TableProperties className="w-4 h-4" />
            Roles
          </span>
        </Link>

        <span className="opacity-80">
          <ChevronRight className="w-4 h-4" />
        </span>

        <Link to={'/roles/new'} className=" disabled">
          <span className="flex gap-2 justify-center items-center font-semibold text-sm opacity-80">Nuevo rol</span>
        </Link>
      </div>

      <div className="flex justify-between items-center mb-10">
        <Title title="Nuevo rol" />
      </div>

      <NewRoleForm />
    </section>
  )
}

import { Link, useParams } from 'react-router-dom'
import { ChevronRight, TableProperties } from 'lucide-react'

import { Title } from '@/components/ui/title'
import { EditRoleForm } from '@/components/roles/edit-role-form'

export const EditRolesPage = () => {
  const params = useParams<{ id: string }>()

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

        <span className="flex gap-2 justify-center items-center font-semibold text-sm opacity-80">Editar rol</span>

        <span className="opacity-80">
          <ChevronRight className="w-4 h-4" />
        </span>

        <span className="flex gap-2 justify-center items-center font-semibold text-sm opacity-80">{params.id}</span>
      </div>

      <div className="flex justify-between items-center mb-10">
        <Title title="Editar rol" />
      </div>

      <EditRoleForm />
    </section>
  )
}

import { Role } from '@/interfaces/role'
import { TableCell, TableRow } from '../ui/table'
import { Button } from '../ui/button'
import { Brush } from 'lucide-react'
import { DeleteRoleAlert } from './delete-role-alert'
import { Link } from 'react-router-dom'

interface RolProps {
  role: Role
  index: number
  deleteRole: (id: string) => Promise<void>
}

export const Rol = (props: RolProps) => {
  const { role, index } = props

  const createdAt = new Date(role.created_at).toLocaleDateString()
  const updateAt = new Date(role.update_at).toLocaleDateString()

  return (
    <TableRow key={role.id}>
      <TableCell className="font-medium">{index}</TableCell>
      <TableCell>{role.role}</TableCell>
      <TableCell>{createdAt}</TableCell>
      <TableCell>{updateAt}</TableCell>
      <TableCell className="flex items-center gap-2">
        <Link to={`/roles/${role.id}`}>
          <Button type="button" variant="outline" size="icon">
            <Brush className="h-4 w-4" />
          </Button>
        </Link>

        <DeleteRoleAlert role={role} deleteRole={props.deleteRole} />
      </TableCell>
    </TableRow>
  )
}

import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import useRoles from '@/hooks/use-roles'
import { Rol } from './rol'

import { SkeletonRolesTable } from './skeleton-roles-table'
import { ErrorRolesTable } from './error-roles-table'

export const RolesTable = () => {
  const { error, loading, roles, deleteRole } = useRoles()

  if (loading && !error) return <SkeletonRolesTable />

  if (error) return <ErrorRolesTable />

  return (
    // <SkeletonRolesTable />
    <Table className="shadow-sm rounded-lg overflow-hidden">
      <TableCaption className="pb-5 pl-5">Una lista de sus roles de usuarios recientes.</TableCaption>
      <TableHeader className="bg-slate-100">
        <TableRow>
          <TableHead className="w-[100px]">#</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead>Update At</TableHead>
          <TableHead>Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {roles.map((role, index) => (
          <Rol key={role.id} role={role} index={index + 1} deleteRole={deleteRole} />
        ))}
      </TableBody>
    </Table>
  )
}

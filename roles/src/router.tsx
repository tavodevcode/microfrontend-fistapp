import { createBrowserRouter } from 'react-router-dom'

import { RolesPage } from '@/pages/roles-page'
import { NewRolesPage } from '@/pages/new-roles-page'
import { EditRolesPage } from './pages/edit-roles-page'

export const router = createBrowserRouter([
  {
    path: '/roles',
    element: <RolesPage />
  },
  {
    path: '/roles/new',
    element: <NewRolesPage />
  },
  {
    path: '/roles/:id',
    element: <EditRolesPage />
  }
])

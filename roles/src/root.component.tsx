import { RouterProvider } from 'react-router-dom'

import { router } from './router'
import { Toaster } from '@/components/ui/toaster'

export default function Root() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  )
}

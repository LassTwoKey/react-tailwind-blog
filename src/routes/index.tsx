import { createBrowserRouter } from 'react-router-dom'

import { Layout } from '@components/Layout'
import { HomePage } from '@pages/HomePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <p>ErrorPage!</p>,
    children: [
      {
        path: '/',
        element: <HomePage />
      }
    ]
  }
])

export default router

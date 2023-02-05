import { Suspense, lazy } from 'react'
import { Navigate, createBrowserRouter } from 'react-router-dom'

import { Loader } from '@ui/Loader'

// import { Layout } from '@components/Layout'
// import { AboutPage } from '@pages/AboutPage'
// import { ContactPage } from '@pages/ContactPage'
// import { ErrorPage } from '@pages/ErrorPage'
// import { HomePage } from '@pages/HomePage'
// import { ServicesPage } from '@pages/ServicesPage'
import { PATHS } from '../constants'

const Layout = lazy(() =>
  import('@components/Layout').then((module) => ({ default: module.Layout }))
)
const AboutPage = lazy(() =>
  import('@pages/AboutPage').then((module) => ({ default: module.AboutPage }))
)
const ContactPage = lazy(() =>
  import('@pages/ContactPage').then((module) => ({ default: module.ContactPage }))
)
const ErrorPage = lazy(() =>
  import('@pages/ErrorPage').then((module) => ({ default: module.ErrorPage }))
)
const HomePage = lazy(() =>
  import('@pages/HomePage').then((module) => ({ default: module.HomePage }))
)
const ServicesPage = lazy(() =>
  import('@pages/ServicesPage').then((module) => ({ default: module.ServicesPage }))
)

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Loader />}>
        <Layout />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Navigate replace to={PATHS.home} />
      },
      {
        path: PATHS.home,
        element: (
          <Suspense fallback={<Loader />}>
            <HomePage />
          </Suspense>
        )
      },
      {
        path: PATHS.about,
        element: (
          <Suspense fallback={<Loader />}>
            <AboutPage />
          </Suspense>
        )
      },
      {
        path: PATHS.services,
        element: (
          <Suspense fallback={<Loader />}>
            <ServicesPage />
          </Suspense>
        )
      },
      {
        path: PATHS.contact,
        element: (
          <Suspense fallback={<Loader />}>
            <ContactPage />
          </Suspense>
        )
      }
    ]
  }
])

export default router

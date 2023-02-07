import { Suspense, lazy } from 'react'
import { Navigate, createBrowserRouter } from 'react-router-dom'

import { ErrorPage } from '@pages/ErrorPage'

import { Loader } from '@ui/Loader'

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

const HomePage = lazy(() =>
  import('@pages/HomePage').then((module) => ({ default: module.HomePage }))
)
const ServicesPage = lazy(() =>
  import('@pages/ServicesPage').then((module) => ({ default: module.ServicesPage }))
)
const ProductPage = lazy(() =>
  import('@pages/ProductPage').then((module) => ({ default: module.ProductPage }))
)
const BlogPage = lazy(() =>
  import('@pages/BlogPage').then((module) => ({ default: module.BlogPage }))
)
const PostDetailsPage = lazy(() =>
  import('@pages/PostDetailsPage').then((module) => ({ default: module.PostDetailsPage }))
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
      },
      {
        path: PATHS.product,
        element: (
          <Suspense fallback={<Loader />}>
            <ProductPage />
          </Suspense>
        )
      },
      {
        path: PATHS.postDetails,
        element: (
          <Suspense fallback={<Loader />}>
            <PostDetailsPage />
          </Suspense>
        )
      },
      {
        path: PATHS.blog.grid,
        element: (
          <Suspense fallback={<Loader />}>
            <BlogPage type='grid' title='Blog Grid' />
          </Suspense>
        )
      },
      {
        path: PATHS.blog.list,
        element: (
          <Suspense fallback={<Loader />}>
            <BlogPage type='list' title='Blog List' />
          </Suspense>
        )
      }
    ]
  }
])

export default router

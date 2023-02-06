import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { Footer } from '@components/Footer'
import { Header } from '@components/Header'
import { ScrollToTop } from '@helpers/ScrollToTop'

export const Layout: FC = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

import { FC, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const ScrollToTop: FC = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    })
  }, [pathname])
  return null
}

import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import cn from 'classnames'

type ButtonType = {
  children?: React.ReactNode
  className?: string
  to?: string
  onClick?: () => void
}

export const Button: FC<ButtonType> = (props) => {
  const { children, className, to, onClick } = props
  return to ? (
    <NavLink className={cn(className)} type='button' to={to}>
      {children}
    </NavLink>
  ) : (
    <button className={cn(className)} onClick={() => onClick && onClick()}>
      {children}
    </button>
  )
}

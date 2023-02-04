import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import cn from 'classnames'

import styles from './index.module.scss'

type ButtonType = {
  children?: React.ReactNode
  className?: string
  to?: string
  type?: 'filling'
  onClick?: () => void
}

export const Button: FC<ButtonType> = (props) => {
  const { children, className, to, type, onClick } = props

  const isFilling = type === 'filling'

  const classNames = cn(styles.parent, {
    [styles.filling]: isFilling,
    [className as string]: className
  })

  return to ? (
    <NavLink className={classNames} type='button' to={to}>
      {children}
    </NavLink>
  ) : (
    <button className={classNames} onClick={() => onClick && onClick()}>
      {isFilling ? (
        <>
          <span className='relative z-10'>{children}</span>
          <span className={cn('_icon-arrow relative z-10', styles.buttonIcon)} />
        </>
      ) : (
        children
      )}
    </button>
  )
}

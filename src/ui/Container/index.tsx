import { FC } from 'react'

import cn from 'classnames'

type ContainerType = {
  children?: React.ReactNode
  className?: string
}

export const Container: FC<ContainerType> = (props) => {
  const { children, className } = props
  return <div className={cn('container mx-auto px-4', className)}>{children}</div>
}

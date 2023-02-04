import { FC } from 'react'

type BoxType = {
  children: React.ReactNode
}

export const Box: FC<BoxType> = (props) => {
  const { children } = props
  return <button>{children}</button>
}

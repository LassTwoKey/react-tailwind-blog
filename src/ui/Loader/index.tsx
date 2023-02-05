import { FC } from 'react'

import cn from 'classnames'

import styles from './index.module.scss'

export const Loader: FC = () => {
  return <div className={cn('loader', styles.parent)}>Loading...</div>
}

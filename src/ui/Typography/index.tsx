import { FC, createElement } from 'react'

import cn from 'classnames'

import styles from './index.module.scss'

type TypographyProps = {
  tag: 'p' | 'h1' | 'h2' | 'h3' | 'h4'
  className?: string
  children?: React.ReactNode
}

export const Typography: FC<TypographyProps> = (props) => {
  const { tag, className, children } = props

  const classNames = cn(styles.parent, {
    [styles.h1]: tag === 'h1',
    [styles.h2]: tag === 'h2',
    [styles.h3]: tag === 'h3',
    [styles.h4]: tag === 'h4',
    [styles.p]: tag === 'p',
    [className as string]: className
  })

  return createElement(tag, { className: classNames }, children)
}

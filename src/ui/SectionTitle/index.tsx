import { FC } from 'react'

import cn from 'classnames'

import styles from './index.module.scss'

type SectionTitle = {
  className?: string
  subTitle?: string | React.ReactNode
  title?: string | React.ReactNode
  right?: boolean
  left?: boolean
  center?: boolean
}

export const SectionTitle: FC<SectionTitle> = (props) => {
  const { subTitle, title, right, left, center, className } = props
  let isRight = true
  let isLeft = true

  if (right) {
    isRight = true
    isLeft = false
  }
  if (left) {
    isLeft = true
    isRight = false
  }
  return (
    <div className={cn(styles.parent, { 'text-center': center }, className)}>
      {subTitle && (
        <h3 className={cn(styles.subTitle, { 'justify-center': center })}>
          {isLeft && <span className={styles.itemButtonLine} />}
          {subTitle}
          {isRight && <span className={styles.itemButtonLine} />}
        </h3>
      )}
      {title && <h2 className={styles.title}>{title}</h2>}
    </div>
  )
}

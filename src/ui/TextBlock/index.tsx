import { FC } from 'react'

import cn from 'classnames'

import { Typography } from '@ui/Typography'

import styles from './index.module.scss'

type TextBlockProps = {
  title?: string
  text?: string
  img?: string
  className?: string
}

export const TextBlock: FC<TextBlockProps> = (props) => {
  const { title, text, img, className } = props
  return (
    <div className={cn(styles.parent, className)}>
      {title && (
        <Typography tag='h3' className={styles.title}>
          {title}
        </Typography>
      )}
      {text && (
        <Typography tag='p' className={styles.title}>
          {text}
        </Typography>
      )}
      {img && <img src={img} alt='image' />}
    </div>
  )
}

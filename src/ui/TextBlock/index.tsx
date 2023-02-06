import { FC } from 'react'

import { Typography } from '@ui/Typography'

import styles from './index.module.scss'

type TextBlockProps = {
  title?: string
  text?: string
  img?: string
}

export const TextBlock: FC<TextBlockProps> = (props) => {
  const { title, text, img } = props
  return (
    <div className={styles.parent}>
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

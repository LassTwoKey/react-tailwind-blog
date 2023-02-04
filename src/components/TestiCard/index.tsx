import { FC } from 'react'

import { Typography } from '@ui/Typography'

import styles from './index.module.scss'

type TestiCardProps = {
  img: string
  text: string
  author: string
  role: string
}

export const TestiCard: FC<TestiCardProps> = (props) => {
  const { img, text, author, role } = props
  return (
    <div className={styles.parent}>
      <div className={styles.cardImg}>
        <div className={styles.img}>
          <img src={img} alt='image' />
        </div>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardText}>
          <Typography tag='p'>{text}</Typography>
          <div className={styles.devider}>
            <span></span>
            <span></span>
          </div>
          <Typography tag='h4'>{author}</Typography>
          <Typography tag='p'>{role}</Typography>
        </div>
      </div>
    </div>
  )
}

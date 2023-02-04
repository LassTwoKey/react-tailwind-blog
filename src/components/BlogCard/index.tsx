import { FC } from 'react'

import { Button } from '@ui/Button'
import { Typography } from '@ui/Typography'

import styles from './index.module.scss'

type BlogCardProps = {
  img: string
  time: string
  title: string
  to: string
}

export const BlogCard: FC<BlogCardProps> = (props) => {
  const { img, time, title, to } = props
  return (
    <div className={styles.parent}>
      <img src={img} alt='img' />
      <div className={styles.text}>
        <Typography tag='p'>{time}</Typography>
        <Button to={to}>
          <Typography tag='h4'>{title}</Typography>
        </Button>
        <Button className={styles.itemBtn} type='filling'>
          READ MORE
        </Button>
      </div>
    </div>
  )
}

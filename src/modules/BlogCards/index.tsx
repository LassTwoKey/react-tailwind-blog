import { FC } from 'react'

import { BlogCard } from '@components/BlogCard'

import { Container } from '@ui/Container'

import { BlogCardType } from '../../types/BlogCard'
import styles from './index.module.scss'

type BlogCardsProps = {
  items: BlogCardType[]
}

export const BlogCards: FC<BlogCardsProps> = (props) => {
  const { items } = props
  return (
    <div className={styles.parent}>
      <Container className={styles.blogs}>
        {items.map((item) => (
          <BlogCard
            key={item.id}
            img={item.img}
            time={item.time}
            title={item.title}
            to={item.to}
            isBlog
          />
        ))}
      </Container>
    </div>
  )
}

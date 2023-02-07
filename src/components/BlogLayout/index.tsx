import { FC } from 'react'

import { RecentPosts } from '@components/RecentPosts'

import { Container } from '@ui/Container'
import { Typography } from '@ui/Typography'

import styles from './index.module.scss'

type BlogLayoutProps = {
  content: React.ReactNode
}

export const BlogLayout: FC<BlogLayoutProps> = (props) => {
  const { content } = props
  return (
    <section className={styles.parent}>
      <Container className={styles.container}>
        <div className={styles.main}>{content}</div>
        <aside className={styles.aside}>
          <Typography tag='h3'>Recent Posts</Typography>
          <RecentPosts />
          <RecentPosts onlyText />
        </aside>
      </Container>
    </section>
  )
}

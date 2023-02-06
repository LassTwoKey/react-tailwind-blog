import { FC } from 'react'

import { PostDetails } from '@modules/PostDetails'

import { Container } from '@ui/Container'

import styles from './index.module.scss'

export const PostDetailsLayout: FC = () => {
  return (
    <section className={styles.parent}>
      <Container>
        <PostDetails />
      </Container>
    </section>
  )
}

import { FC } from 'react'

import cn from 'classnames'

import { Container } from '@ui/Container'
import { Typography } from '@ui/Typography'

import { SOC_MEDIA } from '../../constants'
import styles from './index.module.scss'

export const Footer: FC = () => {
  return (
    <footer className={styles.parent}>
      <Container className='divide-y'>
        <div className={styles.footerTop}>
          <p className={styles.footerLogo}>
            <span>Extra</span>Blog
          </p>
          <Typography tag='p' className={styles.text}>
            There are many variations of passages of Lorem Ipsum available, but the majority have
            suffered alteration in some form, by injected humour,
          </Typography>
          <ul className={styles.list}>
            {SOC_MEDIA.map((item) => (
              <li key={item.id}>
                <a key={item.id} href={item.link} className={cn(item.sprite, styles.socIcons)}></a>
              </li>
            ))}
          </ul>
        </div>
        <Typography tag='p' className={styles.copy}>
          Copyright @2023 All Right Reserved By <span>Sorton IT</span>
        </Typography>
      </Container>
    </footer>
  )
}

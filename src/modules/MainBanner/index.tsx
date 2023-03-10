import { FC } from 'react'

import cn from 'classnames'

import { Container } from '@ui/Container'
import { Typography } from '@ui/Typography'

import styles from './index.module.scss'

export const MainBanner: FC = () => {
  const socMedia = [
    {
      id: 's1',
      sprite: '_icon-facebook',
      link: 'https://www.facebook.com/'
    },
    {
      id: 's2',
      sprite: '_icon-twitter',
      link: 'https://twitter.com/'
    },
    {
      id: 's3',
      sprite: '_icon-telegram',
      link: 'https://telegram.org/'
    }
  ]
  return (
    <section className={styles.parent}>
      <Container>
        <div className={styles.mainBlock}>
          <Typography className={styles.mainBlockHeader} tag='h1'>
            Hi I&#39;m Sen Maxuale
          </Typography>
          <Typography tag='p' className={styles.mainBlockTyped}>
            🔥WEB DESIGNE RPUBLI|
          </Typography>
          <Typography tag='p' className={styles.mainBlockText}>
            Hello i&#39;m Sen Maxuale, wb designer and photography, public figure. welcome to my
            website, i am best photography and designer, I am happy with my work, you have any help
            please let me know
          </Typography>
          <div className={styles.soc}>
            {socMedia.map((item) => (
              <a key={item.id} href={item.link} className={cn(item.sprite, styles.socIcons)}></a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

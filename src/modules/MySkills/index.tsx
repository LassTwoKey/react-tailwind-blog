import { FC } from 'react'

import { Container } from '@ui/Container'

import styles from './index.module.scss'

export const MainBanner: FC = () => {
  const skills = [
    {
      id: 's1',
      name: 'Web Design',
      percent: 90
    },
    {
      id: 's2',
      name: 'Photoshoot',
      percent: 80
    },
    {
      id: 's3',
      name: 'Web Development',
      percent: 87
    },
    {
      id: 's4',
      name: 'Time Management',
      percent: 78
    },
    {
      id: 's5',
      name: 'Coding',
      percent: 71
    }
  ]
  return (
    <section className={styles.parent}>
      <Container>
        {/* <div className={styles.mainBlock}>
          <h1 className={styles.mainBlockHeader}>Hi I&#39;m Sen Maxuale</h1>
          <p className={styles.mainBlockTyped}>🔥WEB DESIGNE RPUBLI|</p>
          <p className={styles.mainBlockText}>
            Hello i&#39;m Sen Maxuale, wb designer and photography, public figure. welcome to my
            website, i am best photography and designer, I am happy with my work, you have any help
            please let me know
          </p>
          <div className={styles.soc}>
            {socMedia.map((item) => (
              <a key={item.id} href={item.link} className={cn(item.sprite, styles.socIcons)}></a>
            ))}
          </div>
        </div> */}
      </Container>
    </section>
  )
}

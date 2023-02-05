import { FC } from 'react'

import cn from 'classnames'

import { Button } from '@ui/Button'
import { Container } from '@ui/Container'
import { SectionTitle } from '@ui/SectionTitle'
import { Typography } from '@ui/Typography'

import { PATHS } from '../../constants'
import styles from './index.module.scss'

export const MySkills: FC = () => {
  const skills = [
    {
      id: 's1',
      name: 'Web Design',
      percent: 90,
      width: 'w-11/12'
    },
    {
      id: 's2',
      name: 'Photoshoot',
      percent: 80,
      width: 'w-4/5'
    },
    {
      id: 's3',
      name: 'Web Development',
      percent: 83,
      width: 'w-10/12'
    },
    {
      id: 's4',
      name: 'Time Management',
      percent: 75,
      width: 'w-9/12'
    },
    {
      id: 's5',
      name: 'Coding',
      percent: 60,
      width: 'w-3/5'
    }
  ]
  return (
    <section className={styles.parent}>
      <Container>
        <SectionTitle subTitle='MY SKILL' title='My Skill' center />
        <div className={styles.row}>
          <div className={styles.block}>
            <Typography tag='h3' className={styles.blockTitle}>
              Every Day is a New Challenge
            </Typography>
            <Typography tag='p' className={styles.blockText}>
              There are many variations of passages of Lorem Ipsum available, but the majority have
              suffered alteration in some form, by injected humour, or randomised words which don’t
              look even slightly believable.
            </Typography>
            <Typography tag='p' className={styles.blockText}>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
              piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
              McClintock, a Latin professor at Hampden.
            </Typography>
            <Button type='filling' className={styles.blockButton} to={PATHS.services}>
              READ MORE
            </Button>
          </div>
          <ul className={styles.stats}>
            {skills.map((item) => (
              <li key={item.id} className={styles.item}>
                <Typography tag='p' className={styles.itemName}>
                  <span>{item.name}</span>
                </Typography>
                <div className={styles.bar}>
                  <div className={cn(styles.progress, item.width)}>
                    <span className={styles.percent}>{item.percent}%</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}

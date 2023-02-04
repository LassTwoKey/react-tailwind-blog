import { FC } from 'react'

import cn from 'classnames'

import { Button } from '@ui/Button'
import { Container } from '@ui/Container'
import { SectionTitle } from '@ui/SectionTitle'
import { Typography } from '@ui/Typography'

import styles from './index.module.scss'
import img from '/img/about.png'

export const About: FC = () => {
  const infos = [
    {
      id: 'i1',
      sprite: '_icon-calendar',
      category: 'Birthday:',
      value: '12-30-1992'
    },
    {
      id: 'i2',
      sprite: '_icon-phone',
      category: 'Number:',
      value: '+880 24587 365'
    },
    {
      id: 'i3',
      sprite: '_icon-website',
      category: 'Website:',
      value: 'www.example.com'
    }
  ]
  return (
    <section className={styles.parent}>
      <Container>
        <div className={styles.row}>
          <img src={img} alt='' />
          <div className={styles.block}>
            <SectionTitle
              subTitle='ABOUT ME'
              title={
                <>
                  I&#39;M SEN <span className='text-yellow-500'>MAXUALE WEB</span> DESIGNER
                </>
              }
              className='max-w-md'
              right
            />
            <Typography tag='p' className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </Typography>
            <ul className={styles.itemsList}>
              {infos.map((item) => (
                <li key={item.id} className={styles.item}>
                  <span className={cn(item.sprite, styles.itemIcon)} />
                  <Typography tag='p'>
                    <span>{`${item.category} ${item.value}`}</span>
                  </Typography>
                </li>
              ))}
            </ul>
            <Button className={styles.button} type='filling'>
              DOWNLOAD CV
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

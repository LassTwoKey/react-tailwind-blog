import { FC } from 'react'

import cn from 'classnames'

import { Button } from '@ui/Button'
import { Container } from '@ui/Container'
import { SectionTitle } from '@ui/SectionTitle'

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
          {/* <img src={img} alt='photo' /> */}
          <img src={img} alt='' />
          <div className={styles.block}>
            <SectionTitle
              subTitle='ABOUT ME'
              title={
                <p>
                  I&#39;M SEN <span className='text-yellow-500'>MAXUALE WEB</span> DESIGNER
                </p>
              }
              className='max-w-md'
              right
            />
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className={styles.itemsList}>
              {infos.map((item) => (
                <li key={item.id} className={styles.item}>
                  <span className={cn(item.sprite, styles.itemIcon)} />
                  <p>
                    <span>{`${item.category} ${item.value}`}</span>
                  </p>
                </li>
              ))}
            </ul>
            <Button className={styles.button}>
              <span className='relative z-10'>DOWNLOAD CV</span>{' '}
              <span className={cn('_icon-arrow relative z-10', styles.buttonIcon)} />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

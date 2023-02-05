import { FC } from 'react'

import { Container } from '@ui/Container'
import { SectionTitle } from '@ui/SectionTitle'
import { Tabs } from '@ui/Tabs'

import styles from './index.module.scss'

export const Portfolio: FC = () => {
  const works = [
    {
      id: 0,
      name: 'All',
      list: [
        {
          id: 'w1',
          subtitle: 'Graphics design',
          title: 'Shaker Mockup',
          img: '/img/p2.jpg',
          to: '/'
        },
        {
          id: 'w2',
          subtitle: 'Graphics design',
          title: 'Product Marketing',
          img: '/img/p3.jpg',
          to: '/'
        },
        {
          id: 'w3',
          subtitle: 'Graphics design',
          title: 'Logo Designer',
          img: '/img/p4.jpg',
          to: '/'
        },
        {
          id: 'w4',
          subtitle: 'Graphics design',
          title: 'Globe Design',
          img: '/img/p5.jpg',
          to: '/'
        },
        {
          id: 'w5',
          subtitle: 'Graphics design',
          title: 'Shopping Mohole',
          img: '/img/p8.jpg',
          to: '/'
        },
        {
          id: 'w6',
          subtitle: 'Graphics design',
          title: 'Digital Agency',
          img: '/img/p2.jpg',
          to: '/'
        }
      ]
    },
    {
      id: 1,
      name: 'DESIGNER',
      list: [
        {
          id: 'w3',
          subtitle: 'Graphics design',
          title: 'Shaker Mockup',
          img: '/img/p4.jpg',
          to: '/'
        },
        {
          id: 'w4',
          subtitle: 'Graphics design',
          title: 'Shopping Mohole',
          img: '/img/p5.jpg',
          to: '/'
        }
      ]
    },
    {
      id: 2,
      name: 'GRAPHIC',
      list: [
        {
          id: 'w5',
          subtitle: 'Graphics design',
          title: 'Shopping Mohole',
          img: '/img/p8.jpg',
          to: '/'
        },
        {
          id: 'w6',
          subtitle: 'Graphics design',
          title: 'Digital Agency',
          img: '/img/p2.jpg',
          to: '/'
        }
      ]
    },
    {
      id: 3,
      name: 'PHOTOGRAPHY',
      list: [
        {
          id: 'w1',
          subtitle: 'Graphics design',
          title: 'Shaker Mockup',
          img: '/img/p2.jpg',
          to: '/'
        },
        {
          id: 'w3',
          subtitle: 'Graphics design',
          title: 'Logo Designer',
          img: '/img/p4.jpg',
          to: '/'
        },
        {
          id: 'w4',
          subtitle: 'Graphics design',
          title: 'Globe Design',
          img: '/img/p5.jpg',
          to: '/'
        }
      ]
    }
  ]
  return (
    <section className={styles.parent}>
      <SectionTitle subTitle='PORTFOLIO' title='My Portfolio' center />
      <Container>
        <Tabs items={works} className={styles.tabs} />
      </Container>
    </section>
  )
}

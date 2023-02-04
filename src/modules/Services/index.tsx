import { FC } from 'react'

import cn from 'classnames'

import { Button } from '@ui/Button'
import { Container } from '@ui/Container'
import { SectionTitle } from '@ui/SectionTitle'
import { Typography } from '@ui/Typography'

import styles from './index.module.scss'

export const Services: FC = () => {
  const services = [
    {
      id: 's1',
      sprite: '_icon-option',
      title: 'Web Development',
      text: 'Lorem ipsum dolor sit amet, tempere adipiscing elit, sed do eiusmod thast tempor incididunt labore.',
      to: '/'
    },
    {
      id: 's2',
      sprite: '_icon-businessman',
      title: 'CEO Marketing',
      text: 'Lorem ipsum dolor sit amet, tempere adipiscing elit, sed do eiusmod thast tempor incididunt labore.',
      to: '/'
    },
    {
      id: 's3',
      sprite: '_icon-website',
      title: 'Website Design',
      text: 'Lorem ipsum dolor sit amet, tempere adipiscing elit, sed do eiusmod thast tempor incididunt labore.',
      to: '/'
    },
    {
      id: 's4',
      sprite: '_icon-money',
      title: 'Mobile Apps',
      text: 'Lorem ipsum dolor sit amet, tempere adipiscing elit, sed do eiusmod thast tempor incididunt labore.',
      to: '/'
    },
    {
      id: 's5',
      sprite: '_icon-strategy',
      title: 'Business Strategy',
      text: 'Lorem ipsum dolor sit amet, tempere adipiscing elit, sed do eiusmod thast tempor incididunt labore.',
      to: '/'
    }
  ]
  return (
    <section className={styles.parent}>
      <Container>
        <SectionTitle subTitle='WHAT I OFFER' title='MY SERVICES' center />
        <div className={styles.items}>
          {services.map((service) => (
            <div key={service.id} className={styles.item}>
              <div className={cn(service.sprite, styles.sprite)}></div>
              <Typography tag='h3' className={styles.itemTitle}>
                {service.title}
              </Typography>
              <Typography tag='p' className={styles.itemText}>
                {service.text}
              </Typography>
              <Button to={service.to} className={styles.itemButton}>
                Read More <span className={styles.itemButtonLine}></span>
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

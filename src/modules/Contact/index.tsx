import { FC } from 'react'

import { Container } from '@ui/Container'
import { SectionTitle } from '@ui/SectionTitle'
import { Typography } from '@ui/Typography'

import styles from './index.module.scss'

export const Contact: FC = () => {
  const contacts = [
    {
      id: 'c1',
      sprite: '_icon-calendar',
      title: 'Office Address',
      text: 'Office Address 56/A-102-Middle Point,New York, US'
    },
    {
      id: 'c1',
      sprite: '_icon-money',
      title: 'Email Address',
      text: 'info@example.com'
    },
    {
      id: 'c1',
      sprite: '_icon-phone',
      title: 'Phone Number',
      text: '088 0245 35487'
    }
  ]
  return (
    <section className={styles.parent}>
      <Container>
        <SectionTitle
          subTitle='CONTACT US'
          title={
            <>
              <span className='text-yellow-500'>Feel</span> Free To Of Contacts With Our IT{' '}
              <span className='text-yellow-500'>Agency</span>
            </>
          }
          center
        />
        <div className={styles.row}>
          <div className={styles.block}>
            <Typography tag='h3'>Company Address</Typography>
            <Typography tag='p'>
              There are many variations of passages of Lorem Ipsum available, but the majority have
              suffered alteration in some form,
            </Typography>
            <ul>
              {contacts.map((item) => (
                <li key={item.id}>
                  <div className={item.sprite}></div>
                  <div>
                    <h4>{item.title}</h4>
                    <Typography tag='p'>{item.text}</Typography>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}

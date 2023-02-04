import { FC } from 'react'

import { BlogCard } from '@components/BlogCard'
import { Pagination } from 'swiper'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Button } from '@ui/Button'
import { Container } from '@ui/Container'
import { SectionTitle } from '@ui/SectionTitle'

import styles from './index.module.scss'

export const BlogArea: FC = () => {
  const cards = [
    {
      id: 'b1',
      img: '/img/blog1.jpg',
      time: 'February 15, 2023',
      title: 'At Least Once In Your Lifetime And Here’s',
      to: '/'
    },
    {
      id: 'b2',
      img: '/img/blog2.jpg',
      time: 'February 14, 2023',
      title: 'At Least Once In Your Lifetime And Here’s',
      to: '/'
    },
    {
      id: 'b3',
      img: '/img/blog3.jpg',
      time: 'February 13, 2023',
      title: 'The Most Of Popular Techno Website',
      to: '/'
    },
    {
      id: 'b4',
      img: '/img/blog4.jpg',
      time: 'February 12, 2023',
      title: 'At Least Once In Your Lifetime And Here’s',
      to: '/'
    }
  ]
  return (
    <section className={styles.parent}>
      <Container>
        <div className={styles.row}>
          <SectionTitle
            subTitle='OUR LATEST WORK'
            title={
              <>
                <span className='text-yellow-500'>Latest</span> News And Ideas From Our{' '}
                <span className='text-yellow-500'>Blog</span>
              </>
            }
            left
            className={styles.title}
          />
          <div>
            <Button type='filling' className={styles.button}>
              DOWNLOAD CV
            </Button>
          </div>
        </div>
        <div className={styles.swiper}>
          <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={3}
            breakpoints={{
              0: {
                slidesPerView: 1,
                centeredSlides: true
              },
              576: {
                slidesPerView: 2,
                centeredSlides: false
              },
              1024: {
                slidesPerView: 3
              }
            }}
            pagination={{ clickable: true }}
          >
            {cards.map((item) => (
              <SwiperSlide key={item.id}>
                <BlogCard img={item.img} time={item.time} title={item.title} to={item.to} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  )
}

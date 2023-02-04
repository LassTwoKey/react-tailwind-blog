import { FC } from 'react'

import { TestiCard } from '@components/TestiCard'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Container } from '@ui/Container'
import { SectionTitle } from '@ui/SectionTitle'

import styles from './index.module.scss'

export const Testimonial: FC = () => {
  const cards = [
    {
      id: 'c1',
      img: 'img/testi1.jpg',
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      author: 'Raymond Roy',
      role: 'Developer'
    },
    {
      id: 'c2',
      img: 'img/testi2.jpg',
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      author: 'Medison',
      role: 'Developer'
    },
    {
      id: 'c3',
      img: 'img/testi3.jpg',
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      author: 'Christian',
      role: 'Developer'
    }
  ]
  return (
    <section className={styles.parent}>
      <Container>
        <SectionTitle
          subTitle='TESTIMONIAL'
          title={
            <>
              Words From Our <span className='text-yellow-500'>Customers What</span> Say Clients
            </>
          }
          center
        />
        <div className={styles.swiper}>
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            pagination={{ clickable: true }}
          >
            {cards.map((item) => (
              <SwiperSlide key={item.id}>
                <TestiCard img={item.img} text={item.text} author={item.author} role={item.role} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  )
}

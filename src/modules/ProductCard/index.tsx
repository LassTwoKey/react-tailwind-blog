import { FC } from 'react'

import { Container } from '@ui/Container'
import { Typography } from '@ui/Typography'

import styles from './index.module.scss'

type ProductCardProps = {
  name: string
  category: string
  client: string
  date: string
  skills: string
  img: string
}

export const ProductCard: FC<ProductCardProps> = (props) => {
  const { name, category, client, date, skills, img } = props
  return (
    <section className={styles.parent}>
      <Container>
        <div className={styles.card}>
          <div className={styles.img}>
            <img src={img} alt='product' />
          </div>
          <div>
            <Typography tag='h3'>Portfolio Information</Typography>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Typography tag='p'>
                  <strong>Project Name: </strong>
                  {name}
                </Typography>
              </li>
              <li className={styles.item}>
                <Typography tag='p'>
                  <strong>Category: </strong>
                  {category}
                </Typography>
              </li>
              <li className={styles.item}>
                <Typography tag='p'>
                  <strong>Client: </strong>
                  {client}
                </Typography>
              </li>
              <li className={styles.item}>
                <Typography tag='p'>
                  <strong>Complete Date: </strong>
                  {date}
                </Typography>
              </li>
              <li className={styles.item}>
                <Typography tag='p'>
                  <strong>Skills: </strong>
                  {skills}
                </Typography>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}

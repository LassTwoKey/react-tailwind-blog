import { FC } from 'react'

import { Button } from '@ui/Button'
import { Container } from '@ui/Container'
import { Typography } from '@ui/Typography'

import { PATHS } from '../../constants'
import styles from './index.module.scss'

type BreadcumbAreaProps = {
  breadcumbs: string
}

export const BreadcumbArea: FC<BreadcumbAreaProps> = (props) => {
  const { breadcumbs } = props

  return (
    <section className={styles.parent}>
      <Container className={styles.content}>
        <Typography tag='h1'>{breadcumbs}</Typography>
        <div className={styles.breadcumb}>
          <Button className={styles.button} to={`/${PATHS.home}`}>
            HOME
          </Button>
          <span className='_icon-arrow'></span>
          <Typography tag='p'>{breadcumbs}</Typography>
        </div>
      </Container>
    </section>
  )
}

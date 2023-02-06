import { FC } from 'react'

import { BreadcumbArea } from '@modules/BreadcumbArea'
import { ProductCard } from '@modules/ProductCard'

import { Container } from '@ui/Container'
import { TextBlock } from '@ui/TextBlock'

export const ProductPage: FC = () => {
  return (
    <main className='bg-darker pb-24 max-md:pb-12'>
      <BreadcumbArea breadcumbs='Shopping Mohole' />
      <ProductCard
        name={'Creative Template Design'}
        category={'Graphics Design / Web Design'}
        client={' Oley Derek'}
        date={'Complete Date :01 April, 2018'}
        skills={'Photoshop / Illustrator'}
        img={'/img/p4.jpg'}
      />
      <Container>
        <TextBlock
          title='Awesome Logo Design'
          text='Whether you are building an enterprise web portal or a state-of-the-art website, you always need the right modern tools. Well-built and maintained PHP frameworks provide those tools maintained PHP frameworks provide those tools in abundance, allowing developers to save time, re-use code, and streamline the back end. As software development tools continuously change to follow the latest. Despite the competition from startups and the ever-present economic challenges, the banking industry is gradually adopting what the latest technologies have to offer. From cloud technology to cyber risk management to machine learning in investment banking, join us as we explore the banking industry trends for 2019 and beyond. Cloud is one of the current banking industry trends as well.'
        />
      </Container>
    </main>
  )
}

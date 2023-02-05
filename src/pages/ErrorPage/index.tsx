import { FC } from 'react'

import { Footer } from '@components/Footer'
import { Header } from '@components/Header'

import { Typography } from '@ui/Typography'

export const ErrorPage: FC = () => {
  return (
    <>
      <Header />
      <main className='flex justify-center items-center'>
        <Typography tag='h1'>
          Oops, there was an <span className='text-red-500'>error!</span>
        </Typography>
      </main>
      <Footer />
    </>
  )
}

import { FC } from 'react'

import { About } from '@modules/About'
import { MainBanner } from '@modules/MainBanner'
import { Services } from '@modules/Services'

export const HomePage: FC = () => {
  return (
    <main>
      <MainBanner />
      <Services />
      <About />
    </main>
  )
}

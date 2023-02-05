import { FC } from 'react'

import { Portfolio } from '@modules/Portfolio'
import { Services } from '@modules/Services'

export const ServicesPage: FC = () => {
  return (
    <main>
      <Services />
      <Portfolio />
    </main>
  )
}

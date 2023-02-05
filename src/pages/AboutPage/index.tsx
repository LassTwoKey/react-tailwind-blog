import { FC } from 'react'

import { About } from '@modules/About'
import { Services } from '@modules/Services'

export const AboutPage: FC = () => {
  return (
    <main>
      <About />
      <Services />
    </main>
  )
}

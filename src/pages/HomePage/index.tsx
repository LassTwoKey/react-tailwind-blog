import { FC } from 'react'

import { About } from '@modules/About'
import { BlogArea } from '@modules/BlogArea'
import { Contact } from '@modules/Contact'
import { MainBanner } from '@modules/MainBanner'
import { MySkills } from '@modules/MySkills'
import { Portfolio } from '@modules/Portfolio'
import { Services } from '@modules/Services'
import { Testimonial } from '@modules/Testimonial'

export const HomePage: FC = () => {
  return (
    <main>
      <MainBanner />
      <Services />
      <About />
      <Portfolio />
      <MySkills />
      <Testimonial />
      <BlogArea />
      <Contact />
    </main>
  )
}

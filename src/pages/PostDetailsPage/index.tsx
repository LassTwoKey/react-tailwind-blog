import { FC } from 'react'

import { BlogLayout } from '@components/BlogLayout'
import { ContactForm } from '@components/ContactForm'
import { BreadcumbArea } from '@modules/BreadcumbArea'
import { PostDetails } from '@modules/PostDetails'

export const PostDetailsPage: FC = () => {
  return (
    <main>
      <BreadcumbArea breadcumbs='The Most Of Nontraditional Community' />
      <BlogLayout
        content={
          <>
            <PostDetails />
            <ContactForm formTitle='Leave Comment' />
          </>
        }
      />
    </main>
  )
}

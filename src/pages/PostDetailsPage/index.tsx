import { FC } from 'react'

import { PostDetailsLayout } from '@components/PostDetailsLayout'
import { BreadcumbArea } from '@modules/BreadcumbArea'

export const PostDetailsPage: FC = () => {
  return (
    <main>
      <BreadcumbArea breadcumbs='The Most Of Nontraditional Community' />
      <PostDetailsLayout />
    </main>
  )
}

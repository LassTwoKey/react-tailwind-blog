import { FC } from 'react'

import { BlogCards } from '@modules/BlogCards'
import { BreadcumbArea } from '@modules/BreadcumbArea'

export const BlogPage: FC = () => {
  const cards = [
    {
      id: 'b1',
      img: '/img/blog1.jpg',
      time: 'February 15, 2023',
      title: 'At Least Once In Your Lifetime And Here’s',
      to: '/post-details'
    },
    {
      id: 'b2',
      img: '/img/blog2.jpg',
      time: 'February 14, 2023',
      title: 'At Least Once In Your Lifetime And Here’s',
      to: '/post-details'
    },
    {
      id: 'b3',
      img: '/img/blog3.jpg',
      time: 'February 13, 2023',
      title: 'The Most Of Popular Techno Website',
      to: '/post-details'
    },
    {
      id: 'b4',
      img: '/img/blog4.jpg',
      time: 'February 12, 2023',
      title: 'At Least Once In Your Lifetime And Here’s',
      to: '/post-details'
    },
    {
      id: 'b5',
      img: '/img/blog3.jpg',
      time: 'February 13, 2023',
      title: 'The Most Of Popular Techno Website',
      to: '/post-details'
    },
    {
      id: 'b6',
      img: '/img/blog4.jpg',
      time: 'February 12, 2023',
      title: 'At Least Once In Your Lifetime And Here’s',
      to: '/post-details'
    }
  ]
  return (
    <main>
      <BreadcumbArea breadcumbs='Blog Grid' />
      <BlogCards items={cards} />
    </main>
  )
}

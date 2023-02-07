import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

import { Button } from '@ui/Button'
import { Typography } from '@ui/Typography'

import styles from './index.module.scss'

type RecentPostsProps = {
  onlyText?: boolean
}

export const RecentPosts: FC<RecentPostsProps> = (props) => {
  const { onlyText } = props
  const recentPosts = [
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
    }
  ]
  return (
    <ul className={styles.parent}>
      {recentPosts.map((item) => (
        <li key={item.id} className={styles.item}>
          <NavLink to={item.to} className='block w-full'>
            {onlyText && <Typography tag='h3'>{item.title}</Typography>}
            {!onlyText && (
              <>
                <img src={item.img} alt='post' />
                <span>
                  <Typography tag='h3'>{item.title}</Typography>
                  <Typography tag='p'>{item.time}</Typography>
                </span>
              </>
            )}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

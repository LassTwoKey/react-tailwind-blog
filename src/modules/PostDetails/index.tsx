import { FC } from 'react'

import { TextBlock } from '@ui/TextBlock'
import { Typography } from '@ui/Typography'

import styles from './index.module.scss'

export const PostDetails: FC = () => {
  const details = {
    img: '/img/blog2.jpg',
    date: '22, February, 2023',
    content: [
      {
        id: 'c1',
        isText: true,
        source:
          'Lorem ipsum dolor sit amet consectet adipisie cing elit sed eiusmod tempor incididunt on labore et dolore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.'
      },
      {
        id: 'c2',
        isText: true,
        source:
          'Bccaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est there laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium ware doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia on voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos query ratione voluptatem sequi nesciunt. Neque porro quisquam'
      },
      {
        id: 'c3',
        isText: true,
        source:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dolor an incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud there exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure poor dolor in reprehenderit in voluptate velit esse cillum'
      },
      {
        id: 'c4',
        isimg: true,
        source: '/img/blog6.jpg'
      },
      {
        id: 'c5',
        isTitle: true,
        source: 'Setting the mood with incense'
      },
      {
        id: 'c6',
        isText: true,
        source:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor dolor an incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud there exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure poor dolor in reprehenderit in voluptate velit esse cillum'
      },
      {
        id: 'c7',
        isText: true,
        source:
          'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.– Amanda Pollock, Google Inc.'
      },
      {
        id: 'c8',
        isTitle: true,
        source: 'Setting the mood with incense'
      },
      {
        id: 'c9',
        isText: true,
        source:
          'Bccaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est there laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium ware doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia on voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos query ratione voluptatem sequi nesciunt. Neque porro quisquam'
      }
    ]
  }
  return (
    <article className={styles.parent}>
      <img src={details.img} alt='' />
      <Typography tag='p'>{details.date}</Typography>
      {details.content.map((item) => (
        <div key={item.id}>
          {item.isimg && <TextBlock img={item.source} />}
          {item.isTitle && <TextBlock title={item.source} />}
          {item.isText && <TextBlock text={item.source} />}
        </div>
      ))}
    </article>
  )
}

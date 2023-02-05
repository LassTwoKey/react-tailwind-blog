import { FC, useState } from 'react'

import cn from 'classnames'

import { Button } from '@ui/Button'
import { Typography } from '@ui/Typography'

import styles from './index.module.scss'

type TabsProps = {
  className?: string
  items: any
}

export const Tabs: FC<TabsProps> = (props) => {
  const { className, items } = props
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0)

  const onClickHandler = (id: number) => {
    setActiveTabIndex(id)
  }

  return (
    <div className={cn(styles.parent, className)}>
      <ul className={styles.navList}>
        {items.map((item: any) => (
          <li key={item.id}>
            <Button onClick={() => onClickHandler(item.id)} type='common' className={styles.navBtn}>
              {item.name}
            </Button>
          </li>
        ))}
      </ul>
      <div className={styles.content}>
        {items[activeTabIndex].list.map((item: any) => (
          <div key={item.id} className={styles.contentItem}>
            <img src={item.img} alt='img' />
            <div className={styles.itemText}>
              <div>
                <Typography tag='p'>{item.subtitle}</Typography>
                <Button to={item.to}>
                  <Typography tag='h3'>{item.title}</Typography>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

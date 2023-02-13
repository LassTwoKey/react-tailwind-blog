import { FC, useEffect, useState } from 'react'

import { HeaderMenu } from '@components/HeaderMenu'
import cn from 'classnames'

import { Button } from '@ui/Button'
import { Container } from '@ui/Container'
import { IconMenu } from '@ui/IconMenu'

import { PATHS } from '../../constants'
import { HEADER_MENU } from '../../constants'
import styles from './index.module.scss'

export const Header: FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const [position, setPosition] = useState(window.pageYOffset)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const moving = window.pageYOffset

      setVisible(position > moving)
      setPosition(moving)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  let cls = visible ? styles.visible : styles.hidden

  if (window.pageYOffset > 100) {
    console.log(window.pageYOffset)
    cls = cn(cls, styles.bg)
  }

  return (
    <header className={cn(styles.parent, cls)}>
      <Container className={styles.container}>
        <Button className={styles.logoButton} to={PATHS.home}>
          <span className={styles.logo}>Extra</span>Blog
        </Button>
        <HeaderMenu list={HEADER_MENU} setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
        <IconMenu setMenuOpen={setMenuOpen} isActive={menuOpen} />
        <Button className={styles.qouteButton}>
          <span>Get a Quote</span>
        </Button>
      </Container>
    </header>
  )
}

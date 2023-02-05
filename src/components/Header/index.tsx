import { FC, useState } from 'react'

import { HeaderMenu } from '@components/HeaderMenu'

import { Button } from '@ui/Button'
import { Container } from '@ui/Container'
import { IconMenu } from '@ui/IconMenu'

import { PATHS } from '../../constants'
import { HEADER_MENU } from '../../constants'
import styles from './index.module.scss'

export const Header: FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  return (
    <header className={styles.parent}>
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

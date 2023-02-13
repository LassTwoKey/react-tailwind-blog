import { FC, useState } from 'react'

import cn from 'classnames'
import { HeaderMenuType } from 'src/types/HeaderMenu'

import { Button } from '@ui/Button'

import styles from './index.module.scss'

type HeaderMenu = {
  list: HeaderMenuType[]
  menuOpen: boolean
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const HeaderMenu: FC<HeaderMenu> = (props) => {
  const { list, menuOpen, setMenuOpen } = props
  const [subMenuOpen, setSubMenuOpen] = useState<boolean>(false)

  const navClasses = cn(
    styles.parent,
    { 'max-md:-top-full': !menuOpen },
    { 'max-md:top-12': menuOpen }
  )

  const subMenuClasses = cn(styles.subMenu, {
    'max-md:h-0': !subMenuOpen
  })

  if (menuOpen) {
    document.body.classList.add('lock')
  } else {
    document.body.classList.remove('lock')
  }

  const toggleSubMenuHanlder = () => {
    setSubMenuOpen((prevState) => !prevState)
  }
  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className={cn(navClasses)}>
      <ul className={styles.list}>
        {list.map((item) => (
          <li className={cn(styles.menuItem)} key={item.id}>
            {item.to ? (
              <Button className={styles.menuButton} onClick={closeMenu} to={item.to}>
                {item.name}
              </Button>
            ) : (
              <>
                <Button
                  className={cn(styles.menuButton, 'max-md:w-full')}
                  onClick={toggleSubMenuHanlder}
                >
                  {item.name}
                </Button>
                <ul className={subMenuClasses}>
                  {item.submenu &&
                    item.submenu.map((subItem) => (
                      <li className={styles.subMenuItem} key={subItem.id}>
                        <Button
                          className={styles.subMenuButton}
                          onClick={closeMenu}
                          to={subItem.to}
                        >
                          {subItem.name}
                        </Button>
                      </li>
                    ))}
                </ul>
              </>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

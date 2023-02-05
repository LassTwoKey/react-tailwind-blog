import { FC } from 'react'

import cn from 'classnames'

import styles from './index.module.scss'

type InputProps = {
  className?: string
  placeholder?: string
  value?: string
  setValue?: any
  // type?: 'tel' | 'email' | 'website'
  // onChange?: () => void
}

export const Input: FC<InputProps> = (props) => {
  const { className, placeholder, value, setValue } = props

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  return (
    <div className={cn(styles.parent, className)}>
      <input
        placeholder={placeholder}
        onChange={onChangeHandler}
        value={value}
        className={styles.input}
        type='text'
      />
    </div>
  )
}

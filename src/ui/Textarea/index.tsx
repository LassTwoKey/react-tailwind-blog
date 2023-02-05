import { ChangeEvent, FC } from 'react'

import cn from 'classnames'

import styles from './index.module.scss'

type TextareaProps = {
  className?: string
  placeholder?: string
  value?: string
  setValue?: any
}

export const Textarea: FC<TextareaProps> = (props) => {
  const { className, placeholder, value, setValue } = props
  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)
  }
  return (
    <div className={styles.parent}>
      <textarea
        className={cn(styles.textarea, className)}
        placeholder={placeholder}
        onChange={onChangeHandler}
        value={value}
      ></textarea>
    </div>
  )
}

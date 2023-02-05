import { FC, useState } from 'react'

import { Button } from '@ui/Button'
import { Input } from '@ui/Input'
import { Textarea } from '@ui/Textarea'
import { Typography } from '@ui/Typography'

import styles from './index.module.scss'

export const ContactForm: FC = () => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [website, setWebsite] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [isError, setIsError] = useState<boolean>(false)

  const onSumbitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const isSimpleValidation = !!name.trim() && !!email.trim() && !!phone.trim() && !!website.trim()
    if (!isSimpleValidation) {
      setIsError(true)
      console.log('error!')
      setTimeout(() => {
        setIsError(false)
      }, 3000)
      return
    }
    setIsError(false)
  }
  return (
    <div className={styles.parent}>
      <Typography tag='h3'>Contact Us</Typography>
      <form action='#' onSubmit={onSumbitHandler}>
        <div className={styles.formItem}>
          <Input placeholder='Name' value={name} setValue={setName} />
          <Input placeholder='Email' value={email} setValue={setEmail} />
        </div>
        <div className={styles.formItem}>
          <Input placeholder='Phone' value={phone} setValue={setPhone} />
          <Input placeholder='Website' value={website} setValue={setWebsite} />
        </div>
        <Textarea
          placeholder='Your message'
          value={message}
          setValue={setMessage}
          className={styles.formTextarea}
        />
        <Button type='common'>Send message</Button>
      </form>
      {isError && (
        <Typography tag='p' className='text-red-400 mt-6'>
          Oops! There was a problem.
        </Typography>
      )}
    </div>
  )
}

import { FC } from 'react'

import cn from 'classnames'

type IconMenuProps = {
  isActive?: boolean
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export const IconMenu: FC<IconMenuProps> = (props) => {
  const { isActive, setMenuOpen } = props
  return (
    <button
      onClick={() => setMenuOpen((presState) => !presState)}
      className='relative group hidden max-md:block z-20'
    >
      <div className='relative flex overflow-hidden items-center justify-center w-[26px] h-[25px] transform transition-all duration-200'>
        <div className='flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden'>
          <div
            className={cn(
              'bg-white h-[2px] w-7 transform transition-all duration-300 origin-left',
              {
                'group-focus:translate-x-10': isActive
              }
            )}
          ></div>

          <div
            className={cn('bg-white h-[2px] w-7 rounded transform transition-all duration-300', {
              'group-focus:translate-x-10 delay-75': isActive
            })}
          ></div>
          <div
            className={cn(
              'bg-white h-[2px] w-7 transform transition-all duration-300 origin-left',
              {
                'group-focus:translate-x-10 delay-150': isActive
              }
            )}
          ></div>
          <div
            className={cn(
              'absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10',
              {
                'group-focus:translate-x-0 flex w-0 group-focus:w-12': isActive
              }
            )}
          >
            <div
              className={cn(
                'absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300',
                {
                  'group-focus:rotate-45': isActive
                }
              )}
            ></div>
            <div
              className={cn(
                'absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300',
                {
                  'group-focus:-rotate-45': isActive
                }
              )}
            ></div>
          </div>
        </div>
      </div>
    </button>
  )
}

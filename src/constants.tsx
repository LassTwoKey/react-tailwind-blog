export const HEADER_MENU = [
  {
    id: 'm1',
    to: '/',
    name: 'Home'
  },
  {
    id: 'm2',
    to: '/',
    name: 'About'
  },
  {
    id: 'm3',
    to: '/',
    name: 'Services'
  },
  {
    id: 'm4',
    name: 'Blog',
    submenu: [
      {
        id: 'sm2',
        name: 'Blog List',
        to: '/'
      },
      {
        id: 'sm1',
        name: 'Blog Grid',
        to: '/'
      }
    ]
  },
  {
    id: 'm5',
    to: '/',
    name: 'Contact us'
  }
]

export const SOC_MEDIA = [
  {
    id: 's1',
    sprite: '_icon-facebook',
    link: 'https://www.facebook.com/'
  },
  {
    id: 's2',
    sprite: '_icon-twitter',
    link: 'https://twitter.com/'
  },
  {
    id: 's3',
    sprite: '_icon-telegram',
    link: 'https://telegram.org/'
  }
]

export const PATHS = {
  home: 'home',
  about: 'about',
  services: '/services',
  blog: {
    grid: 'blog/grid',
    list: 'blog/list'
  },
  contact: 'contact',
  product: 'product',
  postDetails: 'post-details'
}

export const HEADER_MENU = [
  {
    id: 'm1',
    to: PATHS.home,
    name: 'Home'
  },
  {
    id: 'm2',
    to: PATHS.about,
    name: 'About'
  },
  {
    id: 'm3',
    to: PATHS.services,
    name: 'Services'
  },
  {
    id: 'm4',
    name: 'Blog',
    submenu: [
      {
        id: 'sm2',
        name: 'Blog List',
        to: PATHS.blog.list
      },
      {
        id: 'sm1',
        name: 'Blog Grid',
        to: PATHS.blog.grid
      }
    ]
  },
  {
    id: 'm5',
    to: PATHS.contact,
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

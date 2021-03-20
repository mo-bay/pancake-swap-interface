import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://samosaswap.rupx.io/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://samosaswap.rupx.io/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://samosaswap.rupx.io/syrup',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://samosaswap.rupx.io/lottery',
  },
  {
    label: 'NFT',
    icon: 'NftIcon',
    href: 'https://samosaswap.rupx.io/nft',
  },
  {
    label: 'Teams & Profile',
    icon: 'GroupsIcon',
    calloutClass: 'rainbow',
    items: [
      {
        label: 'Leaderboard',
        href: 'https://samosaswap.rupx.io/teams',
      },
      {
        label: 'Task Center',
        href: 'https://samosaswap.rupx.io/profile/tasks',
      },
      {
        label: 'Your Profile',
        href: 'https://samosaswap.rupx.io/profile',
      },
    ],
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://samosa.rupx.io',
      },
      {
        label: 'Tokens',
        href: 'https://samosa.rupx.io/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://samosa.rupx.io/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://samosa.rupx.io/accounts',
      },
    ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: 'https://samosaswap.rupx.io/ifo',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Voting',
        href: 'https://voting.samosaswap.rupx.io',
      },
      {
        label: 'Github',
        href: 'https://github.com/pancakeswap',
      },
      {
        label: 'Docs',
        href: 'https://docs.samosaswap.rupx.io',
      },
      {
        label: 'Blog',
        href: 'https://samosaswap.medium.com',
      },
    ],
  },
]

export default config

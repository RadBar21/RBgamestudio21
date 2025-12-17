import { Game, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { 
    label: { cs: 'Domů', en: 'Home' }, 
    path: '/' 
  },
  { 
    label: { cs: 'Portfolio', en: 'Portfolio' }, 
    path: '/portfolio' 
  },
  { 
    label: { cs: 'Ochrana údajů', en: 'Privacy' }, 
    path: '/privacy' 
  },
  { 
    label: { cs: 'Kontakt', en: 'Contact' }, 
    path: '/contact' 
  },
];

export const GAMES: Game[] = [
  {
    id: '1',
    title: { cs: 'Simple Blue Snake Evolution', en: 'Simple Blue Snake Evolution' },
    description: {
      cs: 'Hra, která se inspiruje klasickým hadem. Plňte denní výzvy a denní řady. Získávejte ocenění a nové barvy a skiny pro vylepšení herního zážitku.',
      en: 'A game inspired by the classic snake. Complete daily challenges and streaks. Earn achievements and new colors and skins to enhance your gaming experience.'
    },
    imageUrl: '/RBgamestudio21/image/BlueSnake.png',
    googlePlayUrl: '#',
    appStoreUrl: '#',
    genre: { cs: 'Arcade', en: 'Arcade' },
    status: 'coming_soon',
  },
  {
    id: '2',
    title: { cs: 'Blue Memory Game: Train Brain', en: 'Blue Memory Game: Train Brain' },
    description: {
      cs: 'Trénujte svou paměť, hrajte sami nebo s kamarádem. Plňte denní výzvy a získávejte ocenění za svou hru.',
      en: 'Train your memory, play alone or with a friend. Complete daily challenges and earn achievements for your gameplay.'
    },
    imageUrl: '/RBgamestudio21/image/MemoryGame.png',
    googlePlayUrl: '#',
    appStoreUrl: '#',
    genre: { cs: 'Puzzle', en: 'Puzzle' },
    status: 'coming_soon',
  },
  {
    id: '3',
    title: { cs: 'Space Colony', en: 'Space Colony' },
    description: {
      cs: 'Komplexní 2D strategická vesmírná hra. Vyberte si z mnoha civilizací a ovládněte galaxii. Propracovaný systém těžby, kolonizace, získávání zkušeností a vylepšování jednotek.',
      en: 'A complex 2D strategic space game. Choose from many civilizations and dominate the galaxy. Elaborate system of mining, colonization, gaining experience, and upgrading units.'
    },
    imageUrl: '/RBgamestudio21/image/SpaceColony.png',
    googlePlayUrl: '#',
    appStoreUrl: '#',
    genre: { cs: 'Strategy', en: 'Strategy' },
    status: 'coming_soon',
  },
];
export type Language = 'cs' | 'en';

export interface LocalizedText {
  cs: string;
  en: string;
}

export type GameStatus = 'coming_soon' | 'released';

export interface Game {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  imageUrl: string;
  googlePlayUrl?: string;
  appStoreUrl?: string;
  genre: LocalizedText;
  status: GameStatus;
}

export interface NavItem {
  label: LocalizedText;
  path: string;
}
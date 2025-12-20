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
  webUrl?: string;
  // NOVÁ VLASTNOST: Určuje, zda je webová verze hry jen pro PC
  isDesktopOnly?: boolean; 
  genre: LocalizedText;
  status: GameStatus;
}

export interface NavItem {
  label: LocalizedText;
  path: string;
}
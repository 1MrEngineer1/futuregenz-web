export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Cpu' | 'Code' | 'Wrench' | 'Settings' | 'ShieldCheck' | 'Cloud';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum PageState {
  HOME = 'home',
  SERVICES = 'services',
  ABOUT = 'about',
  CONTACT = 'contact'
}
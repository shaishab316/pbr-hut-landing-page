export interface MenuItem {
  id: string;
  name: string;
  category: 'ribz' | 'pizza' | 'chicken' | 'burgers' | 'sides' | 'drinks';
  description: string;
  priceJMD: number;
  priceUSD: number;
  imageUrl: string;
  isPopular?: boolean;
  isSpicy?: boolean;
  prepTime: string;
  calories?: string;
}

export interface EventItem {
  id: string;
  name: string;
  category: 'armbands' | 'decor' | 'lighting' | 'chafing' | 'tableware';
  description: string;
  priceJMD: number;
  priceUSD: number;
  imageUrl: string;
  minimumQuantity: number;
  unit: string;
  isPopular?: boolean;
  leadTime: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  comment: string;
  avatarUrl: string;
  tag: string;
  date: string;
}

export interface KeyFeature {
  id: string;
  iconName: string;
  title: string;
  description: string;
  highlightTag?: string;
}

export interface AppScreen {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  highlights: string[];
}

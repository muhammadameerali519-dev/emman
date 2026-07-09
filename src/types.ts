export interface Artwork {
  id: string;
  number: string;
  title: string;
  medium: string;
  year: string;
  dimensions: string;
  image: string;
}

export interface Exhibition {
  id: string;
  year: string;
  title: string;
  venue: string;
  city: string;
  type: 'Solo' | 'Group';
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}

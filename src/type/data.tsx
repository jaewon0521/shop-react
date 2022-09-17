interface rating {
  count: number;
  rate: number;
}

export interface DetailProps {
  category?: string;
  description?: string;
  id?: number;
  image?: string;
  price?: number;
  rating?: rating;
  title?: string;
}

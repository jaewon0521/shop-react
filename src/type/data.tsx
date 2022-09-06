interface DetailProps {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: [number, number]; // any ?? type지정??
  title: string;
}

export interface ProductsProps extends Array<DetailProps> {}

interface Irating {
  count: number;
  rate: number;
}

export interface IProduct {
  category?: string;
  description?: string;
  id?: number;
  image?: string;
  price?: number;
  rating?: Irating;
  title?: string;
}

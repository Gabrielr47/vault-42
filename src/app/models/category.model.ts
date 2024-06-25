import Image from './image.model';

export interface CategoryResponse {
  items: Category[];
  total: number;
}

export interface Category {
  Image: Image;
  _id: string;
  description?: string;
  slug: string;
  title: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  image: Media;
  rating: number;
  tags: string[];
  reviews: Review[];
}

export interface Media {
  url: string;
  alt: string;
}

export interface Review {
  id: string;
  username: string;
  rating: number;
  description: string;
}

export interface Meta {
  isFirstPage: boolean;
  isLastPage: boolean;
  currentPage: number;
  previousPage: number | null;
  nextPage: number | null;
  pageCount: number;
  totalCount: number;
}

export interface AllProductsResponse {
  data: Product[];
  meta: Meta;
}

export interface SingleProductResponse {
  data: Product;
  meta: Record<string, never>;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: Meta;
}

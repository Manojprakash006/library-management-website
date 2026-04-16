export interface Book {
  bookId: any;
  _id: string;
  rackNumber: string;
  quantity: number;
  title: string;
  author: string;
  category: string;
  rack: string;
  available: number;
  rating: number;
  isFavourite?: boolean;
}

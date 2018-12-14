export type Category = 'drama' | 'comedy' | 'sport';

export interface Book {
  id: number;
  title: string;
  category: Category;
  description: string;
}

// src/types/index.tsx

export type Course = {
  id: number;
  title: string;
  description?: string;
  duration:number;
  rating: number;
  lessons:number;
  image?: string;
  level?: string;
  categoryId?: number;
};


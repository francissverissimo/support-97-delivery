export interface FirestoreArticle {
  author: string;
  category: { id: string; title: string };
  title: string;
  description: string;
  tags: string[];
  related: Array<{ id: string; title: string }>;
  body: string;
  timestamp: { seconds: number; nanoseconds: number };
  views: number;
  rate: { useful: number; useless: number };
}

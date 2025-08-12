export interface Article {
  id: number;
  title: string;
  text_for_cover: string;
  images: { image: string }[];
  slug: string;
}

export interface ArticleResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Article[];
}

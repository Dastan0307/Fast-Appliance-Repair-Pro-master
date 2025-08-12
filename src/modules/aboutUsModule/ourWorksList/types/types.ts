export interface ImageList {
  id: number;
  image: string;
}

export interface IWorks {
  id: number;
  image?: string;
  description: string;
  short_description: string;
  title: string;
  video_on_youtube?: string;
  images?: ImageList[];
}

export interface WorksResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IWorks[];
}

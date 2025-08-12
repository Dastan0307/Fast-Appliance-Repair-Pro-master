export interface Vacancy {
  id: number;
  title: string;
  slug: string;
  conditions: string;
  location: number;
  created_at: string;
  updated_at: string;
  requirements: string;
  is_active: boolean;
}

export interface VacanciesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Vacancy[];
}

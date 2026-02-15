export interface Movie {
  id: number;
  title: string;
  description: string;
  releaseDate: Date;
  rating: number;
  posterUrl: string;
  backdropUrl: string;
}

export interface CompleteMovie extends Movie {
  genres: string[];
  duration: number;
  budget: number;
  originalTitle: string;
  productionCompanies: string[];
}
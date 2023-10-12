import type {IArtExperience} from '../articles/IArtExperience';

export interface ISectExperience {
  id: number;
  attributes: {
    Title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    slug: string;
    articles: {data: IArtExperience[]};
  };
}

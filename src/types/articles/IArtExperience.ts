import type { StrapiBaseImageType } from '../../strapi-client/types';

export interface IArtExperience {
  Title: string;
  About: string;
  Experience: string;
  Link: string;
  Picture: StrapiBaseImageType;
}

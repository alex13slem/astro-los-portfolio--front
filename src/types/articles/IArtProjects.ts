import type { StrapiBaseImageType } from '../../strapi-client/types';
import type { IArtTechnology } from './IArtTechnology';

export interface IArtProjects {
  title: string;
  link: string;
  thumb: StrapiBaseImageType;
  TitleMD: string;
  DescriptionMD: string;
  technologies: IArtTechnology[];
}

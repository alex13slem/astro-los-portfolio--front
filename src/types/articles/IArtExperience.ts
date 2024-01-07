import type { StrapiBaseImageType } from '../../strapi-client/types';

export interface IArtExperience {
  title: string;
  link: string;
  TitleMD: string;
  DescriptionMD: string;
  BodyMD: string;
  thumb: StrapiBaseImageType;
}

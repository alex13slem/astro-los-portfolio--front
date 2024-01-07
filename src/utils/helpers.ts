import { normaliseStrapiResponse } from '../strapi-client/normalize';
import type {
  StrapiEntity,
  StrapiPaginatedArray,
} from '../strapi-client/types';

export const cn = (...cNames: any): string =>
  cNames.filter(Boolean, String).join(' ');

export const createWrapperAndAppendToBody = (
  wrapperId: string,
  cn?: string
): HTMLDivElement => {
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('id', wrapperId);
  cn ? (wrapperElement.className = cn) : null;
  document.body.appendChild(wrapperElement);
  return wrapperElement;
};

async function fetchStrapi<Fields>(url: string) {
  const res = await fetch(url);
  const data = await res.json();
  const norm = normaliseStrapiResponse(data) as Fields;
  return norm;
}

export async function fetchStrapiOneById<Fields>(type: string, id: string) {
  const url = `${import.meta.env.PUBLIC_API}/${type}/${id}?populate=deep`;
  return await fetchStrapi<Fields & StrapiEntity>(url);
}
export async function fetchStrapiOneBySlug<Fields>(type: string, slug: string) {
  const url = `${
    import.meta.env.PUBLIC_API
  }/${type}?populate=deep&filters[slug][$eq]=${slug}`;
  const section = (await fetchStrapi<Fields & StrapiEntity>(url)) as [
    Fields & StrapiEntity
  ];
  return section[0];
}
// posts?filters[slug][$eq]=entrada-de-prueba-2
export async function fetchStrapiMany<Fields>(type: string) {
  const url = `${import.meta.env.PUBLIC_API}/${type}?populate=deep`;
  return await fetchStrapi<StrapiPaginatedArray<StrapiEntity & Fields>>(url);
}
export async function fetchStrapiSingle<Fields>(type: string) {
  const url = `${import.meta.env.PUBLIC_API}/${type}?populate=deep`;
  return await fetchStrapi<StrapiEntity & Fields>(url);
}

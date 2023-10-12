import type {MarkdownLayoutProps} from 'astro';

export type IBlogProps = MarkdownLayoutProps<{
  title: string;
  description: string;
  author: string;
  date: string;
}>;

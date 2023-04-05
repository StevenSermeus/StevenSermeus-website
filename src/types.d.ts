export type FrontmatterType = {
  title: string;
  author: string;
  date: string;
  live?: string;
  tags?: string[];
  github?: string;
  description: string;
  type: string;
  image?: {
    src: string;
    alt: string;
  };
  robots: boolean;
  lecture?: number;
  new?: boolean;
  draft?: boolean;
};

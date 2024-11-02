export interface Work {
  id: number;
  title: string;
  technologiesUsed: string;
  status: string;
  links: {
    name: string;
    links: string[];
  }[];
  images: string[];
}

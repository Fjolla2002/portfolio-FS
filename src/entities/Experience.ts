import { ExperienceProject } from "./ExperienceProject";

export interface Experience {
  id: number;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  location: string;
  description?: string;
  projects?: ExperienceProject[];
}

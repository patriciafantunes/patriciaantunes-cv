
import { WorkSectionProps } from "@/components/WorkSection";
import { ProjectConclusionProps } from "@/components/ProjectConclusion";
import { ProjectPresentationProps } from "@/components/ProjectPresentation";

import { botecoProject } from "./boteco-brazilian";

export const allProjects: ProjectDetail[] = [
  botecoProject,
];

// Função auxiliar para a listagem
export const projectPreviews: ProjectPreview[] = allProjects.map(
  ({ slug, title, category, thumbnail, description }) => ({
    slug, title, category, thumbnail, description
  })
);

// Função para encontrar um projeto pelo slug
export function getProjectBySlug(slug: string) {
  return allProjects.find((p) => p.slug === slug);
}

// Estrutura para a página de listagem (Cards)
export interface ProjectPreview {
  slug: string;
  title: string;
  category: string;
  thumbnail: string;
  description: string; // Uma frase curta
}

// Estrutura completa (reutilizando a tua WorkSectionProps)
export interface ProjectDetail extends ProjectPreview {
  presentation: ProjectPresentationProps;
  sections: WorkSectionProps[];
  conslusion: ProjectConclusionProps;
}
import { ImageLabel } from "@/components/ImageLabel";
import { WorkSection, WorkSectionProps } from "@/components/WorkSection";
import { ProjectConclusion, ProjectConclusionProps } from "@/components/ProjectConclusion";
import { ProjectPresentation, ProjectPresentationProps } from "@/components/ProjectPresentation";
import { getProjectBySlug } from "@/data/projects";
import { notFound } from "next/navigation";


type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return {
    title: `${project?.title}`,
    description: project?.description,
  };
}

interface project {
	presentation: ProjectPresentationProps;
	sections: WorkSectionProps[];
	conslusion: ProjectConclusionProps;
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <>
			<ProjectPresentation {...project.presentation} />

			{project.sections.map((section, i) => (
				<WorkSection key={i} {...section} />
			))}

			<ProjectConclusion {...project.conslusion} />
    </>
  );
}

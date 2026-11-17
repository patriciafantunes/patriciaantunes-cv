export interface ProjectPresentationProps {
	projectName: string;
	projectInterventions: string;
}

export function ProjectPresentation({projectName, projectInterventions}: ProjectPresentationProps) {
	return(
		<div className="h-[520]  max-w-3xl m-auto pt-15 pb-30 flex flex-col justify-center items-center">
			<p className="text-5xl text-center mb-2">{projectName}</p>
			<p className="italic text-center">{projectInterventions}</p>
		</div>
	)
}
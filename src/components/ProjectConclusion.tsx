export interface ProjectConclusionProps {
	text: string;
	link?: {
		href: string;
		caption: string;
	}
}

export function ProjectConclusion({text, link}: ProjectConclusionProps) {
	return(
		<>
			<hr className="my-20" />
			<div className="md:ml-14 text-center">
				<p className="text-2xl mb-3">{text}</p>
				{link && 
					<a
					    href={link.href}
					    target="_blank"
					    className="underline underline-offset-4 hover:opacity-70"
					  >
					    {link.caption}
					  </a>
				}
				
			</div>
		</>
	)
}
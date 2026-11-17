import { projectPreviews } from "@/data/projects";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

export default async function projectsList() {
	return (
		<>
			<div className="h-[520] max-w-3xl  m-auto py-20 flex flex-col justify-center items-center">
				<p className="text-4xl md:text-7xl text-center">
					A selection of projects where{' '}
					<span className="bg-white px-2 mix-blend-difference">
					ideas, constraints, and execution
					</span> come together.
				</p>
			</div>

			{projectPreviews.map((project) => (
				<Link key={project.slug} href={`/projects/${project.slug}`} className="group w-full flex justify-between items-center py-2 px-0 md:px-6 duration-900 inset-shadow-[0_0_0_#fff] hover:inset-shadow-[900px_0_0_#e6e5e5] transition">
					<div>
						<p className="text-2xl">{project.title}</p>
						<p className="italic">{project.description}</p>
					</div>
					<FontAwesomeIcon className="opacity-0 group-hover:opacity-100 transition-all ease-in-out delay-800 mr-5 group-hover:mr-0" icon={faArrowRightLong} />
				</Link>
			))}

		</>
	)
}
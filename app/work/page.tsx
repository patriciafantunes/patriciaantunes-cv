import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faArrowRight, faLink } from '@fortawesome/free-solid-svg-icons'

export default async function Page() {
 
  return (
    <>
      <div className="h-full py-20 flex flex-col justify-center items-center">
        <p className="text-7xl text-center">A look at the places and projects that shaped how I <span className="bg-white px-2 mix-blend-difference">build, think, and create</span>.</p>
      </div>
      <div className="py-8">
        <p className="italic">2019 - Current</p>
        <p className="text-3xl">Consultant at Agap2IT</p>
        <p className="pt-5 font-bold">Responsabilities:</p>
        <ul>
          <li><FontAwesomeIcon icon={faCheck} /> Ensure the correct implementation of UI components, including responsive adaptations across multiple platforms</li>
          <li><FontAwesomeIcon icon={faCheck} /> Apply UI best practices and performance standards aligned with company guidelines</li>
          <li><FontAwesomeIcon icon={faCheck} /> Maintain and evolve core platforms that support key business processes</li>
          <li><FontAwesomeIcon icon={faCheck} /> Actively contribute ideas to improve team workflows and reduce recurring issues</li>
          <li><FontAwesomeIcon icon={faCheck} /> Collaborate in UI/UX discussions, helping shape user-centered solutions</li>
        </ul>
        <p className="pt-5 font-bold">Relevant Projects:</p>
        <ul>
          <li><FontAwesomeIcon icon={faArrowRight} /> Designed and developed a reusable UI library, translating the design system into an npm module used across projects</li>
          <li><FontAwesomeIcon icon={faArrowRight} /> Led the migration of a core platform from Angular 8 to Angular 19, improving maintainability and performance</li>
          <li><FontAwesomeIcon icon={faArrowRight} /> Defined user flows and created wireframes to support 8 collective purchase platforms across different countries</li>
          <li><FontAwesomeIcon icon={faArrowRight} /> Implemented and adapted a base frontend project for multiple markets, collaborating with UI designers to ensure accurate implementation and consistency across different countries</li>
        </ul>
      </div>

      <div className="py-8">
        <p className="text-3xl">Freelance Project</p>
        <p className="">Boteco Brazilian - Waxing Care <a target="_blank" href="https://waxing-care.com"><FontAwesomeIcon icon={faLink} /></a></p>
        <p className="italic">Branding, Website Redesign & Frontend Implementation | 2024</p>

        <p className="pt-5 font-bold">Context:</p>
        <p>Freelance project focused on creating a new brand identity and redesigning an existing website for a Brazilian waxing care business, improving visual consistency, usability, and overall online presence.</p>
        
        <p className="pt-5 font-bold">Role & Impact:</p>
        <ul>
          <li><FontAwesomeIcon icon={faCheck} /> Created the brand identity from scratch, including logo, color palette, and visual direction</li>
          <li><FontAwesomeIcon icon={faCheck} /> Redesigned the existing website UI, improving hierarchy, clarity, and responsiveness</li>
          <li><FontAwesomeIcon icon={faCheck} /> Implemented the redesigned website in WordPress using Elementor, ensuring consistency and easy content management</li>
          <li><FontAwesomeIcon icon={faCheck} /> Reorganized content to better support service presentation and contact flow</li>
        </ul>
        
        <p className="pt-5 font-bold">Key Contributions:</p>
        <ul>
          <li><FontAwesomeIcon icon={faArrowRight} /> Established a clear and cohesive brand identity for a growing business</li>
          <li><FontAwesomeIcon icon={faArrowRight} /> Transformed an existing website into a more modern, user-friendly experience</li>
          <li><FontAwesomeIcon icon={faArrowRight} /> Delivered a production-ready redesign while preserving existing content and structure</li>
        </ul>
      </div>
    </>
  )
}
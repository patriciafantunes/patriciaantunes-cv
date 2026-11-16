import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faArrowRight, faLink } from '@fortawesome/free-solid-svg-icons'

export default async function Page() {

  return (
    <>
      <div className="h-[520] max-w-3xl m-auto py-20 flex flex-col justify-center items-center">
        <p className="text-7xl text-center">
          A look at the places and projects that shaped how I{' '}
          <span className="bg-white dark:text-black px-2 mix-blend-difference">
            build, think, and create
          </span>.
        </p>
      </div>

      {/* AGAP2IT */}
      <div className="py-8">
        <p className="text-5xl font-title italic py-4">Work</p>

        <p className="italic pt-5">2019 - Present</p>
        <p className="text-3xl">Consultant at Agap2IT</p>

        <p className="pt-5 font-bold">Responsibilities:</p>
        <ul>
          <li><FontAwesomeIcon icon={faCheck} /> Ensure correct implementation of UI components, including responsive adaptations across platforms</li>
          <li><FontAwesomeIcon icon={faCheck} /> Apply UI best practices and performance standards aligned with company guidelines</li>
          <li><FontAwesomeIcon icon={faCheck} /> Maintain and evolve core frontend platforms supporting key business processes</li>
          <li><FontAwesomeIcon icon={faCheck} /> Contribute ideas to improve team workflows and reduce recurring issues</li>
          <li><FontAwesomeIcon icon={faCheck} /> Collaborate in UI/UX discussions to help shape user-centered solutions</li>
        </ul>

        <p className="pt-5 font-bold">Relevant Projects:</p>
        <ul>
          <li><FontAwesomeIcon icon={faArrowRight} /> Implemented a reusable UI library, translating the design system into an npm module</li>
          <li><FontAwesomeIcon icon={faArrowRight} /> Implemented the migration of a core platform from Angular 8 to Angular 19</li>
          <li><FontAwesomeIcon icon={faArrowRight} /> Supported user flows and wireframes for collective purchase platforms across multiple countries</li>
          <li><FontAwesomeIcon icon={faArrowRight} /> Implemented and adapted a base frontend project for multiple markets in collaboration with UI designers</li>
        </ul>
      </div>

      {/* FREELANCE */}
      <div className="py-8">
        <p className="text-3xl">Freelance Project</p>
        <p>
          Boteco Brazilian – Waxing Care{' '}
          <a target="_blank" href="https://waxing-care.com">
            <FontAwesomeIcon icon={faLink} />
          </a>
        </p>
        <p className="italic">Branding, Website Redesign & Frontend Implementation | 2024</p>

        <p className="pt-5 font-bold">Context:</p>
        <p>
          Freelance project focused on creating a new brand identity and redesigning an existing website,
          improving visual consistency, usability, and overall online presence.
        </p>

        <p className="pt-5 font-bold">Role & Impact:</p>
        <ul>
          <li><FontAwesomeIcon icon={faCheck} /> Created the brand identity from scratch, including logo, color palette, and visual direction</li>
          <li><FontAwesomeIcon icon={faCheck} /> Redesigned the existing website UI, improving hierarchy, clarity, and responsiveness</li>
          <li><FontAwesomeIcon icon={faCheck} /> Implemented the redesigned website in WordPress using Elementor</li>
          <li><FontAwesomeIcon icon={faCheck} /> Reorganized content to better support service presentation and contact flow</li>
        </ul>

        <p className="pt-5 font-bold">Key Contributions:</p>
        <ul>
          <li><FontAwesomeIcon icon={faArrowRight} /> Established a clear and cohesive brand identity</li>
          <li><FontAwesomeIcon icon={faArrowRight} /> Transformed an existing website into a modern, user-friendly experience</li>
          <li><FontAwesomeIcon icon={faArrowRight} /> Delivered a production-ready redesign while preserving existing content</li>
        </ul>
      </div>

      {/* GESTISOFT */}
      <div className="py-8">
        <p className="italic">2018 - 2019</p>
        <p className="text-3xl">Web Designer at Gestisoft</p>

        <p className="pt-5 font-bold">Responsibilities:</p>
        <ul>
          <li><FontAwesomeIcon icon={faCheck} /> Designed UI/UX solutions with a strong focus on usability</li>
          <li><FontAwesomeIcon icon={faCheck} /> Ensured accurate frontend implementation using Vue.js</li>
          <li><FontAwesomeIcon icon={faCheck} /> Collaborated closely with developers to maintain consistency</li>
          <li><FontAwesomeIcon icon={faCheck} /> Defined interface patterns and interaction flows</li>
          <li><FontAwesomeIcon icon={faCheck} /> Improved interface clarity across internal and client-facing platforms</li>
        </ul>

        <p className="pt-5 font-bold">Relevant Projects:</p>
        <ul>
          <li><FontAwesomeIcon icon={faArrowRight} /> Redesigned the company website to create a more familiar and approachable brand image</li>
          <li><FontAwesomeIcon icon={faArrowRight} /> Humanized the brand using real photos of the workspace and team</li>
          <li><FontAwesomeIcon icon={faArrowRight} /> Improved visual hierarchy, content clarity, and brand perception</li>
        </ul>
      </div>

      {/* AMARIS */}
      <div className="py-8">
        <p className="italic">Jul 2018 - Sep 2018</p>
        <p className="text-3xl">Web Designer at Amaris</p>

        <p className="pt-5 font-bold">Responsibilities:</p>
        <ul>
          <li><FontAwesomeIcon icon={faCheck} /> Participated in the UI/UX design process for a collective energy purchase platform</li>
          <li><FontAwesomeIcon icon={faCheck} /> Translated design concepts into functional frontend interfaces</li>
          <li><FontAwesomeIcon icon={faCheck} /> Developed frontend solutions with a focus on usability and clarity</li>
          <li><FontAwesomeIcon icon={faCheck} /> Collaborated with multidisciplinary teams</li>
        </ul>

        <p className="pt-5 font-bold">Relevant Projects:</p>
        <ul>
          <li><FontAwesomeIcon icon={faArrowRight} /> Contributed to the design of a collective energy purchasing platform</li>
          <li><FontAwesomeIcon icon={faArrowRight} /> Implemented the frontend to ensure a smooth user experience</li>
        </ul>
      </div>

      {/* VIA CONSULTING */}
      <div className="py-8">
        <p className="italic">2016 - 2018</p>
        <p className="text-3xl">UI/UX Designer at Via Consulting</p>

        <p className="pt-5 font-bold">Responsibilities:</p>
        <ul>
          <li><FontAwesomeIcon icon={faCheck} /> Designed interfaces for banking management platforms and mobile applications</li>
          <li><FontAwesomeIcon icon={faCheck} /> Designed app user flows focused on clarity and ease of use</li>
          <li><FontAwesomeIcon icon={faCheck} /> Considered existing USSD flows to ensure cross-channel consistency</li>
          <li><FontAwesomeIcon icon={faCheck} /> Focused on accessibility for users with limited internet connectivity</li>
          <li><FontAwesomeIcon icon={faCheck} /> Began developing frontend skills through close collaboration with frontend developers</li>
          <li><FontAwesomeIcon icon={faCheck} /> Collaborated with product and technical teams</li>
        </ul>

        <p className="pt-5 font-bold">Relevant Projects:</p>
        <ul>
          <li><FontAwesomeIcon icon={faArrowRight} /> Designed mobile app interfaces for banking platforms</li>
          <li><FontAwesomeIcon icon={faArrowRight} /> Ensured compatibility between mobile app and USSD user flows</li>
          <li><FontAwesomeIcon icon={faArrowRight} /> Contributed to a consistent experience across online and offline channels</li>
        </ul>
      </div>

      {/* FNAC */}
      <div className="py-8">
        <p className="italic">Dec 2014 - Feb 2015</p>
        <p className="text-3xl">Web Design Intern at Fnac</p>

        <p className="pt-5 font-bold">Responsibilities:</p>
        <ul>
          <li><FontAwesomeIcon icon={faCheck} /> Supported the web design team during the Christmas peak period</li>
          <li><FontAwesomeIcon icon={faCheck} /> Created affiliate promotional banners for multiple platforms</li>
          <li><FontAwesomeIcon icon={faCheck} /> Developed email newsletters using Adobe Dreamweaver</li>
          <li><FontAwesomeIcon icon={faCheck} /> Ensured visual consistency across email clients</li>
        </ul>

        <p className="pt-5 font-bold">Relevant Projects:</p>
        <ul>
          <li><FontAwesomeIcon icon={faArrowRight} /> Creation of affiliate banners for seasonal campaigns</li>
          <li><FontAwesomeIcon icon={faArrowRight} /> Development of marketing email newsletters</li>
        </ul>
      </div>

      <div className="py-8">
        <p className="text-5xl font-title italic py-4">Education</p>

        <p className="pt-5">2015 - 2016</p>
        <p className="text-2xl">Postgraduate in Digital Experience Design</p>
        <p className="italic">Faculty of Fine Arts, University of Lisbon</p>

        <p className="pt-3">
          A specialization postgraduate program focused on designing and developing advanced digital products and services,
          combining user-centred research, interaction design, interface design, and strategy to create compelling digital experiences.
        </p>

        <ul className="pt-3">
          <li><FontAwesomeIcon icon={faArrowRight} /> User-centred design and research</li>
          <li><FontAwesomeIcon icon={faArrowRight} /> Interaction and interface design</li>
          <li><FontAwesomeIcon icon={faArrowRight} /> Digital product strategy and prototyping</li>
        </ul>
      </div>

      <div className="py-8">
        <p className="">2011 - 2015</p>
        <p className="text-2xl">Bachelor’s Degree in Design</p>
        <p className="italic">Faculty of Architecture, University of Lisbon</p>

        <p className="pt-3">
          An undergraduate design program built around project-based learning, integrating technology, visual communication and conceptual thinking
          to prepare students for versatile professional roles in visual, product, multimedia and interaction design.
        </p>

        <ul className="pt-3">
          <li><FontAwesomeIcon icon={faArrowRight} /> Project-based and interdisciplinary design education</li>
          <li><FontAwesomeIcon icon={faArrowRight} /> Visual, product and interaction design foundations</li>
          <li><FontAwesomeIcon icon={faArrowRight} /> Practical experience developing real design projects</li>
        </ul>
      </div>

    </>
  )
}

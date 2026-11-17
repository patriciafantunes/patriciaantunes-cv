import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faArrowRight, faLink } from '@fortawesome/free-solid-svg-icons'

export default function Skills() {
  return (
    <>
      <div className="h-[520]  max-w-3xl m-auto py-20 flex flex-col justify-center items-center">
        <p className="text-7xl text-center">
          Strong <span className="bg-white dark:text-black px-2 mix-blend-difference">foundations</span>, continuous <span className="bg-white dark:text-black px-2 mix-blend-difference">learning</span>, driven by real-world <span className="bg-white dark:text-black px-2 mix-blend-difference">challenges</span>.
        </p>
      </div>

      <section className="py-16">
          {/* Frontend Development */}
          <div>
            <h3 className="text-4xl mb-4 font-title ">Frontend Development</h3>
            <ul className="space-y-2 flex flex-wrap gap-2 gap-x-7">
              <li>HTML5</li>
              <li>CSS3 & Responsive Layouts</li>
              <li>JavaScript (ES6+)</li>
              <li>Component-based Development</li>
              <li>Performance & Best Practices</li>
              <li>Cross-browser Compatibility</li>
            </ul>
          </div>

          {/* Frameworks & Ecosystem */}
          <div className="mt-10">
            <h3 className="text-4xl font-title mb-4">Frameworks & Ecosystem</h3>
            <ul className="space-y-2 flex flex-wrap gap-2 gap-x-7">
              <li>Angular</li>
              <li>Next.js</li>
              <li>React</li>
              <li>WordPress (Elementor)</li>
            </ul>
          </div>

          {/* UI Engineering */}
          <div className="mt-10">
            <h3 className="text-4xl font-title mb-4">UI Engineering</h3>
            <ul className="space-y-2 flex flex-wrap gap-2 gap-x-7">
              <li>Translating UI/UX into Production Code</li>
              <li>Design System Implementation</li>
              <li>UI Libraries (npm)</li>
              <li>Responsive & Accessible Interfaces</li>
            </ul>
          </div>

          {/* Design & UX */}
          <div className="mt-10">
            <h3 className="text-4xl font-title mb-4">Design & UX</h3>
            <ul className="space-y-2 flex flex-wrap gap-2 gap-x-7">
              <li>UI/UX Fundamentals</li>
              <li>User Flows & Information Architecture</li>
              <li>Accessibility & Usability</li>
              <li>Branding & Visual Consistency</li>
              <li>Website Redesign</li>
              <li>User-centred</li>
              <li>Cross-channel UX Constraints</li>
              <li>International & Multi-market Projects</li>
            </ul>
          </div>

          {/* Tools & Workflow */}
          <div className="mt-10">
            <h3 className="text-4xl font-title mb-4">Tools & Workflow</h3>
            <ul className="space-y-2 flex flex-wrap gap-2 gap-x-7">
              <li>Git</li>
              <li>npm</li>
              <li>Figma</li>
              <li>WordPress</li>
              <li>SVN</li>
            </ul>
          </div>

          <div className="mt-10">
            <h3 className="text-4xl font-title mb-4">Ways of Working</h3>
            <ul className="space-y-2 flex flex-wrap gap-2 gap-x-7">
              <li>Structured problem-solving approach</li>
              <li>Clear and pragmatic communication within cross-functional teams</li>
              <li>Strong attention to detail in UI and frontend implementation</li>
              <li>Continuous improvement through real-world challenges</li>
              <li>Adaptability across different projects, teams, and technical contexts</li>
            </ul>
          </div>

      </section>
    </>
  )
}

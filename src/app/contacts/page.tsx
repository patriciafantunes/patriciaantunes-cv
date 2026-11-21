import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

export default function Skills() {
  return (
    <>
      <div className="h-[520]  max-w-3xl  m-auto py-20 flex flex-col justify-center items-center">
        <p className="text-4xl md:text-7xl text-center">
          <span className="bg-white dark:text-black px-2 mix-blend-difference">Understanding the problem</span> together is where everything starts.
          <br/>
          <a className="mt-5 text-3xl" target="_blank" href="https://www.linkedin.com/in/patriciafantunes/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        </p>
      </div>
    </>
  )
}

// Mobile Menu
'use client';
import {useState} from "react";
import Link from "next/link";


export function MobileMenu() {

  const [menuOpen, setMenuOpen] = useState(false);
  function toggle(){
    setMenuOpen(!menuOpen);
  }

	return (
		<>
			<nav className="w-full flex md:hidden justify-between items-center flex-wrap py-8">
	          <Link href="/"><h1 className="font-title italic text-2xl md:text-4xl leading-none">P <span className="block ml-2.5 -mt-5">A</span></h1></Link>
	          <span className="cursor-pointer" onClick={toggle}>Menu</span>
	        </nav>
			{menuOpen && (
            <div className="fixed w-full z-100 top-0 left-0 bg-white dark:bg-black flex flex-col items-center justify-stretch h-lvh px-5 md:px-16 ">
            	<nav className="w-full flex md:hidden justify-between items-center flex-wrap py-8">
		          <Link href="/"><h1 className="font-title italic text-2xl md:text-4xl leading-none">P <span className="block ml-2.5 -mt-5">A</span></h1></Link>
		          <span className="cursor-pointer" onClick={toggle}>Menu</span>
		        </nav>
		        <div className="flex flex-col items-center justify-center h-full gap-8 pb-10 text-2xl">
		        	<Link onClick={toggle} href="/projects">01/projects</Link>
	              <Link onClick={toggle} href="/experience">02/experience</Link>
	              <Link onClick={toggle} href="/skills">03/skills</Link>
	              <Link onClick={toggle} href="/contacts">04/contacts</Link>
		        </div>
              
            </div>
            )}
		</>
		
	)
}

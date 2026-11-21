import Image from "next/image";
import Link from "next/link";


export default function Home() {




  return (
    <div className="relative h-[calc(100vh-225px)] flex justify-center w-full">
    
        <div className="absolute h-full max-w-3xl m-auto py-6 flex flex-col justify-center items-center opacity-0 animate-slide-fade">
          <p className="text-3xl md:text-7xl text-center">Brings a thoughtful <span className="bg-white dark:text-black px-2 mix-blend-difference">balance of creativity</span> and practical <span className="bg-white dark:text-black px-2 mix-blend-difference">technical problem-solving</span> to every project.</p>
          <p className="italic text-right font-light  pt-4">&mdash; ChatGPT</p>
        </div>
    
        <div className="absolute h-full max-w-3xl m-auto py-6 flex flex-col justify-center items-center opacity-0 animate-slide-fade-delay">
          <p className="text-3xl md:text-7xl text-center"><span className="bg-white dark:text-black px-2 mix-blend-difference">Highly focused</span>, with a <span className="bg-white dark:text-black px-2 mix-blend-difference">structured view</span> of her role — and how it affects everyone else.</p>
          <p className="italic text-center font-light  pt-4 text-xs">The real text: Super focada, tem uma visão estruturada das suas funções e no que isso implica a restante equipa</p>
          <p className="italic text-right font-light  pt-4">&mdash; Client, during a project at Agap2IT</p>
        </div>
    
        <div className="absolute h-full max-w-4xl m-auto py-6 flex flex-col justify-center items-center opacity-0 animate-slide-fade-delay1">
          <p className="text-3xl md:text-7xl text-center">Our projects consistently benefited from her input, making <span className="bg-white dark:text-black px-2 mix-blend-difference">collaborative work richer</span> and more effective.</p>

          <p className="italic text-right font-light  pt-4">&mdash; Verónica Sousa, Product Designer</p>
        </div>
    </div>
  );
}

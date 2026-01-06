import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    
        <div className="h-full py-6 flex flex-col justify-center items-center">
          <p className="text-7xl text-center">Brings a thoughtful <span className="bg-white px-2 mix-blend-difference">balance of creativity</span> and practical <span className="bg-white px-2 mix-blend-difference">technical problem-solving</span> to every project.</p>
          <p className="italic text-right font-light w-full pt-4">&mdash; ChatGPT</p>
        </div>
  
  );
}

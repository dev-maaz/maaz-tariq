import Image, { StaticImageData } from "next/image";
import Enrichly from "@/public/Enrichly.png";
import Solly from "@/public/Solly.png";
import Plunge from "@/public/Plunge.png";
import HotSauceBar from "@/public/Hot Sauce Registration.png";
import EnrichlyLogo from "@/public/er-short-logo.svg";
import SollyLogo from "@/public/solly-short-logo.svg";
import PlungeLogo from "@/public/pl-short-logo.svg";

interface projectProps {
  name: string;
  logo?: StaticImageData;
  image: StaticImageData;   
  link: string;
}

const projects : projectProps[] = [
  {
    name: "Enrichly",
    logo: EnrichlyLogo,
    image: Enrichly,
    link: "https://www.google.com",
  },
  {
    name: "Solly",
    logo: SollyLogo,
    image: Solly,
    link: "https://www.google.com",
  },
  {
    name: "Plunge",
    logo: PlungeLogo,
    image: Plunge,
    link: "https://www.google.com",
  },
  {
    name: "Hot-Sauce Bar",
    logo: null,
    image: HotSauceBar,
    link: "https://www.google.com",
  }
]
export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen justify-between gap-4 lg:gap-12 p-4 lg:p-8 bg-neutral-50 font-sans tracking-tighter">
      {/* Sidebar - responsive layout */}
      <div className="lg:sticky lg:top-8 lg:left-8 flex lg:h-[calc(100svh-4rem)] flex-col w-full lg:w-96 items-start lg:items-stretch justify-between gap-8 lg:gap-auto">
        <div className="flex flex-col items-start justify-start gap-6 lg:gap-8 text-left">
          <div className="flex flex-col">
            <div className="flex text-xl lg:text-2xl font-semibold text-neutral-800">Maaz Tariq<br/> </div>
            <div className="flex text-sm lg:text-sm font-medium tracking-tighter text-neutral-800">Product Designer</div>

            <div className="flex text-sm lg:text-md font-medium tracking-tighter w-full lg:w-72 text-neutral-800">
              <br/>I create cool stuff
              <br/> currently working with Visiata
            </div>

            <div className="flex gap-4 pt-4">
              <button className="flex underline text-sm tracking-normal text-neutral-600 hover:text-neutral-400 transition-colors">
                Email
              </button>
              <button className="flex underline text-sm tracking-normal text-neutral-600 hover:text-neutral-400 transition-colors">
                Twitter
              </button>
              <button className="flex underline text-sm tracking-normal text-neutral-600 hover:text-neutral-400 transition-colors">
                Linkedin
              </button>
            </div>
            
          </div>
        </div>

        <div className="flex tracking-tighter font-medium text-xs lg:text-sm text-neutral-500">
          © Maaz Tariq
        </div>
      </div>

      {/* Projects grid - responsive */}
      <div className="flex flex-col w-full max-w-6xl gap-2 lg:gap-2">
        {projects.map((project,index) => (
          <div className="flex relative overflow-hidden rounded-lg" key={index}>
            <Image 
              src={project.image} 
              alt={project.name} 
              width={1882} 
              height={1353}
              className="w-full h-auto object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
            />
            <div className="flex absolute bottom-3 left-4 z-10 text-neutral-800 tracking-tighter text-xs lg:text-sm font-semibold gap-1 items-center">
              {project.logo && <Image src={project.logo} alt="shortLogo" width={12} height={12} />}
              <span>{project.name}</span>
            </div>
          </div>
        ))}              
      </div>

  </div>
  );
}

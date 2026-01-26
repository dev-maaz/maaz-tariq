import { StaticImageData } from "next/image";
import ProjectCard from "./ProjectCard";
import Enrichly from "@/public/Enrichly.png";
import Solly from "@/public/Solly.png";
import Plunge from "@/public/Plunge.png";
import HotSauceBar from "@/public/hot_sauce.png";
import EnrichlyLogo from "@/public/er-short-logo.svg";
import SollyLogo from "@/public/solly-short-logo.svg";
import PlungeLogo from "@/public/pl-short-logo.svg";
import BounceCentral from "@/public/bounce_central.png";
import Aethel from "@/public/aethel.png";
import Bloom from "@/public/Bloom.png";
import BloomCalender from "@/public/bloom_calender.png";
import Squire from "@/public/Squire.png";
import Invite from "@/public/Invite.png";
import FlashMessages from "@/public/flash_messages.png";
import MediaDesign from "@/public/media_design.png";
import DesignerHangout from "@/public/designer_hangout.png";

interface projectProps {
  name: string;
  logo?: StaticImageData | null;
  image: StaticImageData;   
  link?: string | null;
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
  },
  {
    name: "Bounce Central",
    logo: null,
    image: BounceCentral,
    link: null,
  },
  {
    name: "Aethel",
    logo: null,
    image: Aethel,
    link: null,
  },
  {
    name: "Bloom",
    logo: null,
    image: Bloom,
    link: null,
  },
  {
    name: "Squire",
    logo: null,
    image: Squire,
    link: null,
  },
  {
    name: "Invite",
    logo: null,
    image: Invite,
    link: null,
  },
]
export default function Home() {
  return (
      <div className="flex flex-col w-full min-h-screen justify-start gap-4 p-8 bg-neutral-50 font-sans tracking-tighter">
        {/* Sidebar info (now just first section in column) */}
        <div className="flex flex-col w-full items-start justify-start gap-8">
          <div className="flex flex-col items-start justify-start gap-2 text-left w-96">
              <div className="flex text-lg font-semibold text-neutral-800">Maaz Tariq<br/> </div>

              <div className="text-md w-full text-neutral-500 font-normal ">
  I&apos;m an <span className="font-medium text-neutral-800">engineer-turned-designer</span> skilled in product design, UX, and AI. <br />
                I love working on creative projects and am always on the lookout for opportunities.
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

        {/* Projects grid */}
        <div className="flex flex-wrap w-full">
        <div className="flex flex-row w-full gap-4">
            <ProjectCard
              title="Bloom" 
              image={Bloom}
              link={null}
              logo={null}
              className="flex-[1]"
              />
            <ProjectCard
              title="Enrichly"
              image={Enrichly}
              link={null}
              logo={null}
              className="flex-[0.612]"
              />
          </div>
          <div className="flex flex-row w-full gap-4">
            <ProjectCard
              title="Squire" 
              image={Squire}
              link={null}
              logo={null}
              className="flex-[1]"
              />
            <ProjectCard
              title="Bounce Central"
              image={BounceCentral}
              link={null}
              logo={null}
              className="flex-[0.638]"
              />
            {/* <ProjectCard
              title="Aethel"
              image={Aethel}
              link={null}
              logo={null}
              className="flex-[0.6725]"
              /> */}
          </div>
          <div className="flex flex-row w-full gap-4">
            <ProjectCard
              title="Bloom Calender" 
              image={BloomCalender}
              link={null}
              logo={null}
              className="flex-1"
              />
            <ProjectCard
              title="Hot Sauce Bar"
              image={HotSauceBar}
              link={null}
              logo={null}
              className="flex-[0.56]"
              />
          </div>
          <div className="flex flex-row w-full gap-4">
            <ProjectCard
              title="Designer Hangout"
              image={DesignerHangout}
              link={null}
              logo={null}
              className="flex-[1]"
              />
          </div>
          <div className="flex flex-row w-full gap-4">
            <ProjectCard
              title="Plunge"
              image={Plunge}
              link={null}
              logo={null}
              className="flex-[0.715]"
              />
            <ProjectCard
              title="Solly"
              image={Solly}
              link={null}
              logo={null}
              className="flex-[1]"
              />
          </div>
          <div className="flex flex-row w-full gap-4">
            <ProjectCard
              title="Bloom Toasts"
              image={FlashMessages}
              link={null}
              logo={null}
              className="flex-[1]"
              />
            <ProjectCard
              title="Bloom Access"
              image={Invite}
              link={null}
              logo={null}
              className="flex-[0.5]"
              />
            <ProjectCard
              title="Aethel"
              image={Aethel}
              link={null}
              logo={null}
              className="flex-[0.48]"
              />
          </div>

          {/* <div className="flex flex-row w-full gap-4">
            <ProjectCard
              title="Squire" 
              image={Squire}
              link={null}
              logo={null}
              className="flex-[1]"
              />
            <ProjectCard
              title="Invite"
              image={Invite}
              link={null}
              logo={null}
              className="flex-[0.448]"
              />
          </div> */}

          {/* {projects.map((project, index) => (
            <div className="w-full md:w-1/2 p-2 box-border" key={index}>
              <ProjectCard
                title={project.name}
                image={project.image}
                link={project.link}
                logo={project.logo}
                />
            </div>
          ))} */}
        </div>

    </div>
  );
}

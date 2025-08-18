import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoSass } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { FaGitSquare } from "react-icons/fa";

// backebd icon
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { TbApiOff } from "react-icons/tb";
import { AiFillDatabase } from "react-icons/ai";

// UI icon
import { SiShadcnui } from "react-icons/si";
import { SiDaisyui } from "react-icons/si";
import { SiAntdesign } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiNextui } from "react-icons/si";

const Frontend = [
    { id: 1,
      name: "HTML",
     icon: <FaHtml5 />   
    },
    { id: 2,
      name: "CSS",
     icon: <FaCss3Alt />   
    },
    { id: 3,
      name: "javascript",
     icon: <IoLogoJavascript />   
    },
    { id: 4,
      name: "SASS",
     icon: <IoLogoSass />   
    },
    { id: 5,
      name: "Bootstrap",
     icon: <FaBootstrap />   
    },
    { id: 6,
      name: "TailwindCss",
     icon: <RiTailwindCssFill />   
    },
    { id: 7,
      name: "React.js",
     icon: <FaReact />   
    },
    { id: 8,
      name: "Next.js",
     icon: <SiNextdotjs />   
    },
    { id: 9,
      name: "FaGitSquare",
     icon: <FaGitSquare />   
    },
    { id: 10,
      name: "Redux",
     icon: <SiRedux />   
    },

]
const Backend = [
    { id: 1,
      name: "Nodejs",
     icon: <FaNodeJs />   
    },
    { id: 2,
      name: "Express",
     icon: <SiExpress />   
    },
    { id: 3,
      name: "MongoDB",
     icon: <SiMongodb />   
    },
    
    { id: 4,
      name: "Firebase",
     icon: <IoLogoFirebase />   
    },
    { id:5,
      name: "REST API ",
     icon: <TbApiOff />   
    },
    { id:6,
      name: "JWT ",
     icon: <AiFillDatabase />   
    },
    
    
]
const UI = [
    {
      id: 1,
      name: "ShadcnUI",
      icon: <SiShadcnui />,
    },
    {
      id: 2,
      name: "DaisyUI",
      icon: <SiDaisyui />,
    },

    {
      id: 3,
      name: "Antdesign",
      icon: <SiAntdesign />,
    },
    {
      id: 4,
      name: "MaterialiUI",
      icon: <SiMui />,
    },
    {
      id: 5,
      name: "Heroui-NextUI",
      icon: <SiNextui />,
    },
  ]
function Skill() {
  return (
    <div className=" py-3  lg:px-7">
      <h4 className='resume_title '>My Skills</h4>
      <p className="resume_paragraph">Using my skills to create user-friendly, fast, and effective web applications that meet the client's business needs.
      </p>
{/* frontend skils div */}
      <div className="shadow-md shadow-gray-400 py-3 mt-5">
        <h5 className='resume_title '>Frontend</h5>
        <ul className=" flex flex-wrap gap-5 2xl:gap-6 px-4 py-3 ">
          {
            Frontend.map((skill)=>{
              return (
               
                 <li className=" w-[120px] 2xl:w-[320px] h-[100px] 2xl:h-[180px] bg-gray-400 flex flex-col justify-center rounded-lg items-center shadow-lgs cursor-pointer  hover:animate-ping transition-all duration-200   " key={skill.id} >
                 <p className=" text-[50px] 2xl:text-6xl">  {skill.icon} </p>
                 <p className="py-3 text-black text-[18px] font-bold 2xl:text-5xl">{skill.name}</p>
                </li>
              
              )
            })
          }
          
        </ul>

      </div>
{/* backend skils div */}
      <div className="shadow-md shadow-gray-400 py-3 mt-5">
        <h5 className='resume_title text-primary'>backend</h5>
        <ul className=" flex flex-wrap gap-5  2xl:gap-6 px-4 py-3 ">
          {
            Backend.map((skill)=>{
              return (
               
                 <li className="  w-[120px] 2xl:w-[320px] h-[100px] 2xl:h-[180px] bg-gray-400 flex flex-col justify-center rounded-lg items-center shadow-lgs cursor-pointer  hover:animate-ping transition-all duration-200 " key={skill.id} >
                 <p className=" text-[50px] 2xl:text-6xl">  {skill.icon} </p>
                 <p className="py-3 text-black text-[18px] font-bold 2xl:text-5xl ">{skill.name}</p>
                </li>
              
              )
            })
          }
          
        </ul>

      </div>

      {/* ui div */}
      <div className="shadow-md shadow-gray-400 py-3 mt-5">
        <h5 className='resume_title '>UI Design</h5>
        <ul className=" flex flex-wrap gap-5  2xl:gap-6 px-4 py-3 ">
          {
            UI.map((skill)=>{
              return (
               
                 <li className="  w-[120px] 2xl:w-[320px] h-[100px] 2xl:h-[180px]  flex flex-col justify-center rounded-lg items-center shadow-lgs cursor-pointer hover:animate-ping transition-all duration-200 bg-gray-400 " key={skill.id} >
                 <p className=" text-[50px] mt-5 2xl:text-6xl">  {skill.icon} </p>
                 <p className="py-3 text-black text-[18px] font-bold 2xl:text-5xl ">{skill.name}</p>
                </li>
              
              )
            })
          }
          
        </ul>

      </div>
    </div>
  )
}

export default Skill
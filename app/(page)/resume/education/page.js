

const education =[
  {
    id:1,
    title:" Secondary (SSC)",
    school:"Harinal High School",
    date:"2010 - 2016",
    description:"I passed my SSC from the science department and since then I have developed an interest in computers and technology."
  },
  {
    id:2,
    title:" Front End Development",
    school:"Hublu programmer",
    date:"2021 - 2022",
    description:"I learned HTML, CSS, JavaScript, typescript, Tailwind CSS, Bootstrap, and React.js , Next.js and designed various responsive websites."
  },
  {
    id:3,
    title:"Backend Development",
    school:"Programming Hero",
    date:"2022 - 2023",
    description:"I learned Back-End Web Development with Node.js and Express.js. I did data management and security with MongoDB and JWT."
  },
  {
    id:4,
    title:"MERN Stack Development",
    school:"hublu programmer",
    date:"2023 - 2024",
    description:"I took a full course on the MERN Stack (MongoDB, Express.js, React.js, Next.js, Node.js). In this course, I gained practical experience through project-based learning."
  },

   
]
function Education() {
  return (
    <div className=" py-3 px-6 lg:px-7">

      <div className=" flex flex-col justify-center  items-center" >
      <h3 className='resume_title '> My Education</h3>
      <p className="resume_paragraph">
        I am SB Sakib Sarkar, a passionate and dedicated full-stack web developer. My core expertise is in building web applications based on MERN Stack MongoDB, Express.js, React.js, Next.js, Node.js. I can build complete websites from frontend design to backend development and database.
I love learning new technologies and working on challenging projects. I always try to provide simple and effective solutions to real-world problems through coding.
      </p>
      </div>
      {/*  */}
      <div className=' flex gap-3 flex-wrap mt-6 2xl:mt-13 2xl:gap-10 '>

      {
          education.map((exp) => (
            <div key={exp.id} className="py-3 2xl:px-7  max-w-[300px] md:max-w-[220px] 2xl:max-w-[500px] 2xl:h-[300px] bg-gray-700 px-3 shadow-lgs cursor-pointer hover:scale-110 transition-all duration-200 ">
              <h4 className="text-lg text-[22px] font-semibold text-primarys 2xl:text-5xl">{exp.title}</h4>
              <p className="text-sm font-light">{exp.school}</p>
              <p className="text-sm font-light">{exp.company}</p>
              <p className="text-sm text-[11px]  font-light">{exp.date}</p>
              <p className="text-sm text-gray-200 font-light 2xl:text-2xl 2xl:mt-5">{exp.description}</p>
            </div>
          ))
        }

        
      </div>
      
       
        
    </div>
  )
}

export default Education
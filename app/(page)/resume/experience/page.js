

const experience = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "freelance",
    date: "2021 - 2023",
    description: "I create dynamic and user-friendly frontends using React and Next.js. I create interactive web pages according to your design."
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "freelance",
    date: "2023 - 2025",
    description: "I build powerful backends for your website or app using Node.js and Express.js. Includes REST API, database connections, and user authentication."
  },
  {
    id: 3,
    title: "Database setup and management",
    company: "freelance",
    date: "2023 - 2025",
    description: "I create a complete database system for storing and managing data using MongoDB. I do data modeling and optimization as needed."
  },
  {
    id: 4,
    title: "User authentication and security",
    company: "freelance",
    date: "2023 - 2025",
    description: "I create user login/registration, private routes, and secure APIs using JWT and OAuth2. Your website will be secure and user-friendly."
  },
  {
    id: 5,
    title: "E-commerce web application",
    company: "freelance",
    date: "2023 - 2025",
    description: "I create a fully featured e-commerce site for you: including product management, order processing, and payment gateway integration."
  },
  {
    id: 6,
    title: "Custom web application",
    company: "freelance",
    date: "2023 - 2025",
    description: "I create custom web applications according to your needs, such as blog sites, portfolios, admin panels, task managers, etc."
  },
]
function Experience() {
  return (
    <div className=" py-3 px-6 lg:px-7">

      <div className=" flex flex-col justify-center  items-center" >
      <h3 className='resume_title '> My Experience</h3>
      <p className="resume_paragraph">
       I have been practicing with MERN Stack regularly for the past 2+ years and have built various types of web applications. I have also worked on small freelance projects for some clients. I have done the project planning, design, development and hosting myself.
      </p>
      </div>
      {/*  */}
      <div className=' flex gap-3 flex-wrap mt-6 2xl:gap-10 '>
        {
          experience.map((exp) => (
            <div key={exp.id} className="py-3 max-w-[300px] md:max-w-[220px] 2xl:max-w-[400px] 2xl:h-[300px] bg-gray-700 px-3 shadow-lgs cursor-pointer hover:skew-6 transition-all duration-200 ">
              <h4 className="text-lg text-[22px] font-semibold text-primarys 2xl:text-4xl">{exp.title}</h4>
              <p className="text-sm font-light 2xl:text-2xl">{exp.company}</p>
              <p className="text-sm text-[11px]  font-light ">{exp.date}</p>
              <p className="text-sm text-gray-200 font-light 2xl:mt-5 2xl:text-2xl">{exp.description}</p>
            </div>
          ))
        }

      </div>
      
       
        
    </div>
  )
}

export default Experience
function Aboutmy() {
  return (
    <div className=" py-3 px-6 lg:px-7">

      <div className=" flex flex-col justify-center  items-center" >
      <h3 className='resume_title'>About me</h3>
      <p className="resume_paragraph">
        I am SB Sakib Sarkar, a passionate full-stack web developer, who specializes in the MERN Stack MongoDB, Express.js, React.js, Node.js. I learned my skills online and I am still constantly learning new technologies and applying them to my projects.I find logic in solving any problem, and love creating clean and responsive designs. Web development is my passion — because it allows me to solve real problems through code.
I am currently looking for opportunities where I can use my skills to work on real-world projects, learn with a team, and contribute to the growth of the company.
      </p>
      </div>
      {/*  */}
      <address className=" mt-8 flex flex-col lg:flex-row gap-3 lg:gap-10">
        <div>
          <p className="resume_about_p">Name : <span className='resume_about_span'> SB Sakib Sarkar</span></p> 
          <p className="resume_about_p">Experience : <span className='resume_about_span'> 3+ Years </span></p>
          <p className="resume_about_p">Nationality : <span className='resume_about_span'> Bangladesh</span></p>
          <p className="resume_about_p"> Freelance : <span className='resume_about_span'> Upwork , Fiverr , freelancer </span></p>

        </div>

        <div>
          <p className="resume_about_p">Phone : <span className='resume_about_span'> +8801768820891</span></p>
          <p className="resume_about_p">Email : <span className='resume_about_span'> sakibhossain7397@gmail.com</span></p>
          <p className="resume_about_p">Languages : <span className='resume_about_span'> Engnlish , Hindi, bangla</span></p>
        
        </div>

      </address>
      
       
        
    </div>
  )
}

export default Aboutmy
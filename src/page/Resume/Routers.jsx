import Button from "./Button"

function Routers({children}) {
  
  return (
    <div className=' w-[100%] 2xl:w-screen flex flex-col  lg:flex-row gap-11'>
      <div className="w-full shadow-lg py-4 lg:w-[50%] flex flex-col  items-center" >
        <h1 className="resume_title  ">Why Hire me? </h1>
        <p  className="resume_paragraph ">I'm not just a coder — I'm a problem solver. I think about each project in my own way, so that it really works for the user.</p>
      <Button/>
      </div>
      <div className=" lg:w-[1px] lg:h-screen lg:bg-primarys"></div>
      
    <div className='flex flex-col items-center shadow-lgs md:mr-9  w-full lg:w-[50%] 2xl:w-[80%] gap-2 h-[480px] 2xl:h-[700px] overflow-y-scroll'>
      {children}
    </div>
    </div>
  )
}

export default Routers
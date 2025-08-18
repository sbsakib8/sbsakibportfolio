import Aboutmy from "./about/page"


function Resume({children}) {
  return (
    <section className="">
      <Aboutmy/>
      <div>
        {children}
      </div>
    </section>
  )
}

export default Resume
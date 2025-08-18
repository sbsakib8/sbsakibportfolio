
import Routers from './../../../src/page/Resume/Routers';

function Layout({children}) {
  return (
    <div className="bg-background w-[100%] 2xl:w-screen 2xl:scale-105 h-full flex justify-center items-center">
    <Routers >
      {children}
     </Routers>
    </div>
  )
}

export default Layout
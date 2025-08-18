'use client'
import {useRouter} from 'next/navigation'
function Button() {
  const router = useRouter()
  const navigat = (routers)=>{
    router.push(routers)
  }
  return (
    <div className='button_components'>
      <button className='button_router' onClick={()=>navigat('/resume/about')}>About</button>

      <button  className='button_router' onClick={()=>navigat('/resume/experience')}>Experience</button>

        <button  className='button_router' onClick={()=>navigat('/resume/education')} >Education</button>

        <button  className='button_router' onClick={()=>navigat('/resume/skills')}>Skills</button>
    </div>
  )
}

export default Button;
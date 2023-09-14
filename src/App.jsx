
import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards/Cards'
import Heading from './Components/Heading/Heading'
import Showinfos from './Components/ShowInfos/Showinfos'

function App() {

   const [courses,setCourse] =useState([])

  const HandleBtn = course => {

      // console.log('buy' ,course)
      setCourse([...courses,course])
  }
  return (
    <>
     <div className='mx-auto max-w-screen-xl'>
        <Heading></Heading>
      
         <div className=' flex gap-4   mt-5 '>

             <Cards HandleBtn={HandleBtn} ></Cards>
             <Showinfos courses={courses}></Showinfos>

         </div>
         </div>
    </>
  )
}

export default App

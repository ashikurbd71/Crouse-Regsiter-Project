
import './App.css'
import Cards from './Components/Cards/Cards'
import Heading from './Components/Heading/Heading'
import Showinfos from './Components/ShowInfos/Showinfos'

function App() {


  return (
    <>
        <Heading></Heading>
      
         <div className=' flex gap-5 justify-center mt-5 '>

             <Cards></Cards>
             <Showinfos></Showinfos>

         </div>
      
    </>
  )
}

export default App

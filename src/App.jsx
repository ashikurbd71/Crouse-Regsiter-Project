
import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards/Cards'
import Heading from './Components/Heading/Heading'
import Showinfos from './Components/ShowInfos/Showinfos'
import Swal from 'sweetalert2'



function App() {

   const [courses,setCourse] =useState([])
   const [TotalCredit , setTotalcridit] = useState(0)
   const [MinusCredit,setMinuscredit] = useState(20)
   const [Totalprice , setTotalprice] = useState(0)

  const HandleBtn = course => {

      // console.log('buy' ,course)
 let credit = course.credits
 let Price = course.price
      const isSame = courses.find(item => item.id == course.id)
       if(isSame){
        return Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Already Selected!',
       
        })
       }
      setCourse([...courses,course])

      courses.forEach(item => {

        credit = credit + item.credits
        Price = Price + item.price

      })

       if(credit > 20){
        return Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Check Credit Limit!',
       
        })

       }

       

       const MinusCredit =   20 - credit
       setTotalcridit(credit)
       setMinuscredit(MinusCredit)
       setTotalprice(Price)
      // console.log(credit)
  }
  return (
    <>
     <div className='mx-auto max-w-screen-xl lg:px-0 px-5 '>
        <Heading></Heading>
      
         <div className=' flex gap-4 lg:flex-row flex-col  mt-5 '>

             <Cards HandleBtn={HandleBtn} ></Cards>
             <Showinfos courses={courses} TotalCredit={TotalCredit} MinusCredit={MinusCredit} Totalprice={Totalprice} ></Showinfos>

         </div>
         </div>
    </>
  )
}

export default App

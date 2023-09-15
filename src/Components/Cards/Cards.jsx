  import React, { useEffect, useState } from 'react';
  import Card from '../Card/Card';
  const Cards = ({HandleBtn}) => {

  const [courses,setCours] = useState([])

     useEffect(()=>{

      fetch('data.json')
      .then(res => res.json())
      .then(data => setCours(data))

     },[])
    return (
        <div>
               <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 mb-10 lg:flex-1'>
                {
                    courses.map(cours => <Card 
                        cours={cours}
                         key={cours.id}
                         HandleBtn={HandleBtn}
                         >

                         </Card>)
                }
               </div>
        </div>
    );
  };
  
  export default Cards;
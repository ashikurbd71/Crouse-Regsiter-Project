import React from 'react';

const Showinfo = ({course,idx}) => {
   
    return (
        <div className='mx-auto  text-left ml-5'>
              
             
              <h1 className=' font-semibold text-[16px]  text-[#1C1B1B99]'>{idx+1} {course.name}</h1>
        </div>
    );
};

export default Showinfo;
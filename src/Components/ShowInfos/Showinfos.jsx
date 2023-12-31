import React from 'react';
import Showinfo from '../Showinfo/Showinfo';

const Showinfos = ({courses,TotalCredit,MinusCredit,Totalprice}) => {
    return (
        <div className='lg:w-[350px] w-full h-full mb-10 rounded-lg mx-auto lg:flex-1 bg-[#FFFFFF]'>

            <h1 className='text-[#2F80ED] font-bold text-[16px] ml-5 my-4'>Credit Hour Remaining {MinusCredit} hr</h1> 
<hr className=' mx-auto lg:w-60 w-80 border-1'  />


         <h1 className='text-[#1C1B1B] font-bold text-[20px] ml-5 my-4'>Course Name</h1> 

            {
                courses.map((course,idx) => <Showinfo course={course} key={course.id} idx={idx}></Showinfo>)
            }
            <hr className=' mx-auto lg:w-60 w-80 border-1 my-5' />

            <h1 className='text-[#1C1B1B]  font-bold text-[16px] ml-5 my-4'>Total Credit Hour : {TotalCredit}</h1>
            <hr className=' mx-auto lg:w-60 w-80 border-1 my-5' />
            <h1 className='text-[#1C1B1B] font-bold text-[16px] ml-5 my-4'>Total Price : {Totalprice} USD</h1>
        </div>
    );
};

export default Showinfos;
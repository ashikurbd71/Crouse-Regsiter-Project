import React from 'react';
import { FaDollarSign } from 'react-icons/fa';
import {  FaBook } from 'react-icons/fa';
const Card = ({cours,HandleBtn}) => {
     const{name,description,price,image,credits} = cours
    return (
        <div>
            
            <div className="card lg:w-[320px]  bg-[#FFFFFF] shadow-xl">
  <figure className="px-5 pt-5">
    <img src={image} alt="imges" className="rounded-xl" />
  </figure>
  <div className="card-body">
    <h2 className="text-left text-[#1C1B1B]  font-semibold text-[18px]">{name}</h2>
    <p className=' text-left   text-[#1C1B1B99] text-[14px] py-1'>{description}</p>

      <div className='flex justify-between mb-5'>

   <div className='flex items-center justify-center gap-2'>
    <FaDollarSign className='text text-[#1C1B1B]'></FaDollarSign>
    <p className='text-[#1C1B1B99] text-[16px] font-medium'>Price : {price} </p>
   </div>

    <div className='flex items-center justify-center gap-2'>
       <FaBook className='text-[#1C1B1B]'></FaBook>
        <p className='text-[#1C1B1B99] text-[16px] font-medium'>Credit : {credits}hr </p>
    </div>

      </div>

    <div className="card-actions flex justify-center  ">
      <button onClick={()=>HandleBtn(cours)} className="btn px-20 bg-[#2F80ED] text-white">Select</button>
    </div>
  </div>
</div>

        </div>
    );
};

export default Card;
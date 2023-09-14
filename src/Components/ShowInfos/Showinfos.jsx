import React from 'react';

const Showinfos = ({courses}) => {
    return (
        <div className='w-[350px] h-[420px] border-4 border-black flex-1'>
            <h1>hello from showinfos, {courses.length}</h1> 
        </div>
    );
};

export default Showinfos;
import React from 'react';

const Hero = () =>{
    return(
        <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover content'>
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]'>

            </div>
            <div className='p-5 text-white z-[2] ml-[-10rem] mt-[-10rem]'>
                <h1 className='text-5xl font-bold'>Austi's Products</h1>
            </div>
        </div>
    )
}

export default Hero;
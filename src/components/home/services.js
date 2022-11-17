import React from 'react'
import { ReactComponent as Branch } from '../../assets/svgs/BranchSvg.svg';

const Service = () =>{
    return(
        <div className='flex items-center justify-center h-screen bg-fixed bg-center bg-black'>
            <div className='p-5 text-white z-[2] '>
                <h1 className='text-5xl font-bold text-green-200'>The Ayurvedic Experience</h1>
                <h2 className='p-10 text-3xl'>What is Ayurvedics?</h2>
                <p className='ml-10'>Being is one of the world's oldest medical systems, Ayurvedicsis based on ancient writings 
                    that rely on a natural and holistic approach to physical and mental health. </p>
                <p className='ml-10'>Interested? Book a consultation with me! The initial appointment is free!</p>
                <button className='inline-block self-end bg-olive-green text-white m-10 hover:bg-lime-green ease-out duration-300 font-semibold hover:border-transparent rounded-lg px-6 py-2 uppercase text-sm'>Come Explore My Services</button>
            </div>
        </div>
    )
}

export default Service;
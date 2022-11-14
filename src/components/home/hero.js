import React, { useState, useEffect } from 'react';

const Hero = () =>{

    const [opacity, setOpacity] = useState(0.6)
    const [blur, setBlur] = useState('blur(0px)')

    useEffect(()=>{
        const changeBlur = () => {
            if(window.scrollY >= 600){
                setBlur('blur(' + 0 + 'px)')
                setOpacity(1)
            } else {
                setBlur('blur(' + window.scrollY/20 + 'px)')
                setOpacity( 0.6 + window.scrollY/1200)
            }
        }
        window.addEventListener('scroll', changeBlur);
    }, []);

    return(
        <div 
        className='flex items-center justify-center h-screen bg-fixed bg-center bg-cover content'>
            <div 
            style={{
                opacity: opacity,
            }}
            className='absolute top-0 left-0 right-0 bottom-0 bg-black z-[2]'></div>
            <div 
            style={{
                backdropFilter: `${blur}`,
            }}
            className='absolute top-0 left-0 right-0 bottom-0 bg-transparent z-[1]'></div>
            <div className='center p-5 text-white z-[2]'>
                <h1 className='text-5xl font-bold'>Austi's Ayurvedic Wellness</h1>
                <h2 className='text-2xl p-8'>Explore the path to your new way of being</h2>
            </div>
        </div>
    )
}

export default Hero;
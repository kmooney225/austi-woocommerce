import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone, 
    faEnvelope,
    faLocationDot,
} from '@fortawesome/free-solid-svg-icons'
import { faInstagram,
         faPinterest,
         faFacebook,
         faTiktok
        } from '@fortawesome/free-brands-svg-icons';

const Contact = () =>{
    return(
        <div className="flex w-full min-h-screen justify-center items-center p-2">
            <div className="flex flex-col md:flex-row md:space-x-40 md:space-y-0 space-y-6 bg-green-800 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white">
                <div className='flex flex-col space-y-8 justify-between'>
                    <div>
                        <h1 className='font-bold text-4xl tracking-wide'>
                            Contact Me
                        </h1>
                        <p className='pt-2 text-green-100 text-sm'>
                            Let me know if you have any questions or concerns!
                        </p>
                    </div>
                    <div className='flex flex-col space-y-6'>
                        <div className='inline-flex space-x-2 items-center'>
                            <FontAwesomeIcon className='text-green-300 w-4' icon={faPhone} />
                            <span>+(123) 456 7890</span>
                        </div>
                        <div className='inline-flex space-x-2 items-center'>
                            <FontAwesomeIcon className='text-green-300 w-4' icon={faEnvelope} />
                            <span>example@me.com</span>
                        </div>
                        <div className='inline-flex space-x-2 items-center'>
                            <FontAwesomeIcon className='text-green-300 w-4' icon={faLocationDot} />
                            <span>New York, United States</span>
                        </div>
                    </div>
                    <div className='flex space-x-4'>
                        <a href="#"><FontAwesomeIcon className='text-green-300 w-4' icon={faInstagram} /></a>
                        <a href="#"><FontAwesomeIcon className='text-green-300 w-4' icon={faPinterest} /></a>
                        <a href="#"><FontAwesomeIcon className='text-green-300 w-4' icon={faFacebook} /></a>
                        <a href="#"><FontAwesomeIcon className='text-green-300 w-4' icon={faTiktok} /></a>
                    </div>
                </div>
                <div className='bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80'>
                    <form className='flex flex-col space-y-4'>
                        <div>
                            <label className='text-sm'>Your Name</label>
                            <input 
                                type='text' 
                                placeholder='Your name' 
                                className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mg-2 outline-none focus:ring-2 focus:ring-green-300' 
                            />
                        </div>
                        <div>
                            <label className='text-sm'>Email Address</label>
                            <input 
                                type='text' 
                                placeholder='Email' 
                                className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mg-2 outline-none focus:ring-2 focus:ring-green-300' 
                            />
                        </div>
                        <div>
                            <label className='text-sm'>Message</label>
                            <textarea 
                                type='text' 
                                rows='4'
                                placeholder='Type something meaningful here' 
                                className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mg-2 outline-none focus:ring-2 focus:ring-green-300' 
                            ></textarea>
                        </div>
                        <button className='inline-block self-end bg-green-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm'>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
import Head from 'next/head'
import Link from 'next/link';
import Navbar from './NavBar';
import { useState, useEffect} from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Header = ({header}) => {

    const {headerMenuItems, siteDescription, siteLogoUrl, siteTitle, favicon} = header || {};

    console.log(header)
    
    return(
        <div>
            <Head>
                <title>{siteTitle || 'Austi'}</title>
                <link href={favicon || 'favicon.ico'} />
            </Head>
            <Navbar />
        </div>
    )
}

export default Header;
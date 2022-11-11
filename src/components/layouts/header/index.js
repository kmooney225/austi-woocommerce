import Head from 'next/head'

const Header = ({header}) => {

    const {headerMenuItems, siteDescription, siteLogoUrl, siteTitle, favicon} = header || {};

    console.log(header)
    return(
        <div>
            <Head>
                <title>{siteTitle || 'Austi'}</title>
                <link rel="stylesheet" href={favicon || 'favicon.ico'} />
            </Head>
            <h1>Header!!</h1>
        </div>
    )
}

export default Header;
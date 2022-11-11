import Header from '../src/components/layouts/header';
import Footer from '../src/components/layouts/footer';
import axios from 'axios'

export default function Home({data}) {

  const { header, footer } = data
  return (
    <div>
      <div className="page">
          <main>

            <div className='content'>
              <h1 className="title">Austi's Products</h1>
            </div>
          </main>
          <Footer footer={footer}/>
      </div>
    </div>
  )
}

export async function getStaticProps() {
	
	const { data } = await axios.get( `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer` );
	
  return {
		props: data || {},
		
		/**
		 * Revalidate means that if a new request comes to server, then every 1 sec it will check
		 * if the data is changed, if it is changed then it will update the
		 * static file inside .next folder with the new data, so that any 'SUBSEQUENT' requests should have updated data.
		 */
		revalidate: 1,
	};
}




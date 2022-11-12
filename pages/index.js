import axios from 'axios'
import Hero from '../src/components/home/Hero';
import Service from '../src/components/home/services';
import BlogGallery from '../src/components/home/blog-gallery';
import Contact from '../src/components/home/contact';

export default function Home({data}) {

  const { header, footer } = data
  return (
    <div>
      <Hero />
	  <Service />
	  <BlogGallery />
	  <Contact />
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




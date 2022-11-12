import '../src/styles/index.scss'
import Header from '../src/components/layouts/header';
import Footer from '../src/components/layouts/footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}



export default MyApp

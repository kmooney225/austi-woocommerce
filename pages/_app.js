import '../src/styles/index.scss'
import Header from '../src/components/layouts/header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
    </>
  )
}



export default MyApp

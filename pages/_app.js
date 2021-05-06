import { GTMProvider } from '@elgorditosalsero/react-gtm-hook'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const gtmParams = { id: process.env.NEXT_PUBLIC_GTM_ID }

  return (
    <GTMProvider state={gtmParams}>
      <Component {...pageProps} />
    </GTMProvider>
  )
}

export default MyApp

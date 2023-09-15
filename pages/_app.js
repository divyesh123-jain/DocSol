import Container from '../components/Main/Container'
import {NextUIProvider} from '@nextui-org/react'
import Layout from '@/components/Common'

import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>


  {/* <Layout> */}
 <NextUIProvider>

  <Component {...pageProps} />

  </NextUIProvider>
  {/* </Layout> */}
  </>
}

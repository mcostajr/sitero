import type { AppProps } from 'next/app'
import { Provider } from "next-auth/client"

import Header from '../components/Header'
import LoginProvider from '../contexts/LoginContext'
import MenuProvider from '../contexts/MenuContext'

import '../styles/globals.css'

function MyApp({ Component, pageProps}: AppProps) {

  return (
    <Provider session={pageProps.session}>
      <LoginProvider>
        <MenuProvider>
          <Header />
        </MenuProvider>
        
        <Component {...pageProps} />
      </LoginProvider>
    </Provider>
  )
}
export default MyApp
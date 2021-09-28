import type { AppProps } from 'next/app'
import { getSession, Provider } from "next-auth/client"
import { GetServerSideProps } from 'next'

import Header from '../components/Header'
import LoginProvider from '../contexts/LoginContext'
import MenuProvider from '../contexts/MenuContext'
import DropdownMenu from '../components/DropDownMenu'

import '../styles/globals.css'

function MyApp({ Component, pageProps}: AppProps) {

  return (
    <Provider session={pageProps.session}>
      <LoginProvider>
        <MenuProvider>
          <Header />
          <DropdownMenu/>
          <Component {...pageProps} />
        </MenuProvider>
      </LoginProvider>
    </Provider>
  )
}
export default MyApp

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const session = await getSession()
  return {
    props: {
      session
    }
  }
}
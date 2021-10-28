import type { NextPage } from 'next';
import Head from 'next/head';

import Banners from '../components/SectBanners';
import Info from '../components/SectInfo';
import News from '../components/SectNews';
import NewsShop from '../components/SectShop';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  
  return (
    <>
      <Head>
        <title>SiteRO</title>
      </Head>
      <main>
        <Banners/>
        <Info/>
        <News/>
        <NewsShop/>
      </main>
      <Footer/>
    </>
  )
}

export default Home;
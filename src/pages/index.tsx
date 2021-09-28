import type { NextPage } from 'next';
import Head from 'next/head';

import styles from '../styles/Home.module.scss';
import News from '../components/SectNews';
import Banners from '../components/SectBanners';
import NewsShop from '../components/SectShop';
import Info from '../components/SectInfo/inde';

const Home: NextPage = () => {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>SiteRO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Banners/>
        <Info/>
        <News/>
        <NewsShop/>
      </main>

      <footer className={styles.footer}>
        <div>
          <h5>SOBRE RAGNAROK ONLINE</h5>
        </div>
        <div>
          <h5>MANUTENCAO E CHANGELOG'S</h5>
        </div>
        <div>
          <h5>REDE SOCIAL</h5>
        </div>
      </footer>

    </div>
  )
}

export default Home;
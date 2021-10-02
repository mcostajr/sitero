import type { NextPage } from 'next';
import Head from 'next/head';

import News from '../components/SectNews';
import Banners from '../components/SectBanners';
import NewsShop from '../components/SectShop';
import Info from '../components/SectInfo/inde';

import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>SiteRO</title>
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
          <h5>MANUTENCAO E CHANGELOG</h5>
        </div>
        <div>
          <h5>REDE SOCIAL</h5>
        </div>
      </footer>

    </div>
  )
}

export default Home;
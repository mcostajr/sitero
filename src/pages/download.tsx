import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/Download.module.scss';

export default function Download() {
    return (
        <main className={styles.container}>
            <Head>
                <title>SiteRO | Download</title>
            </Head>
            <div className={styles.background}>
                <div className={styles.wrapper}>
                    <h1>DOWNLOADS</h1>
                    <p>Baixe o nosso jogo e divirta-se muito, jogo totalmente gratuito</p>
                    <div className={styles.buttonContainer}>
                        <button>BAIXAR</button>
                    </div>
                </div>
            </div>
            <div className={styles.photo}>
                <Image 
                    src="/cartoon.png"
                    alt="cartoon"
                    layout="fill"
                    objectFit="contain"
                />
            </div>
        </main>
    )
}
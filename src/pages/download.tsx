import Head from 'next/head';
import Image from 'next/image';
import { FiDownload } from 'react-icons/fi';

import styles from '../styles/Download.module.scss';

export default function Download() {
    return (
        <main className={styles.container}>
            <Head>
                <title>SiteRO | Download</title>
            </Head>
            <div className={styles.wrapper}>
                
                <div className={styles.title}>
                    <h1>Download</h1>
                    <p>Baixe o nosso jogo e se divirta muito, jogo totalmente gratuito.</p>
                </div>
                <div className={styles.downloadContainer}>
                    <ul className={styles.downloadList}>
                        <li className={styles.downloadItem}>
                            <div className={styles.image}>
                                <Image 
                                    src="/download1.png"
                                    alt="download1"
                                    width={200}
                                    height={100}
                                />
                            </div>
                            <div className={styles.info}>
                                <div>
                                    <span>Download Completo</span>
                                    <span>1.2 Gb</span>
                                </div>
                                <button className={styles.button}><FiDownload/> Mega</button>
                            </div>
                        </li>
                        <li className={styles.downloadItem}>
                            <div className={styles.image}>
                                <Image 
                                    src="/download2.png"
                                    alt="download2"
                                    width={200}
                                    height={100}
                                />
                            </div>
                            <div className={styles.info}>
                                <div>
                                    <span>Download Completo</span>
                                    <span>1.2 Gb</span>
                                </div>
                                <button className={styles.button}><FiDownload/> Google Drive</button>
                            </div>
                        </li>
                        <li className={styles.downloadItem}>
                            <div className={styles.image}>
                                <Image 
                                    src="/download3.png"
                                    alt="download3"
                                    width={200}
                                    height={100}
                                />
                            </div>
                            <div className={styles.info}>
                                <div>
                                    <span>Download Completo</span>
                                    <span>1.2 Gb</span>
                                </div>
                                <button className={styles.button}><FiDownload/> Torrent</button>
                            </div>
                        </li>
                        <li className={styles.downloadItem}>
                            <div className={styles.image}>
                                <Image 
                                    src="/download4.png"
                                    alt="download4"
                                    width={200}
                                    height={100}
                                />
                            </div>
                            <div className={styles.info}>
                                <div>
                                    <span>Download Completo</span>
                                    <span>1.2 Gb</span>
                                </div>
                                <button className={styles.button}><FiDownload/> Media Fire</button>
                            </div>
                        </li>
                    </ul>
                </div>
            
            </div>
            <div className={styles.background}>
                <Image
                    src='/download.png' 
                    alt='download'
                    width='450px'
                    height='820px'
                />
            </div>
        </main>
    )
}
import Head from 'next/head';
import { FiDownload } from 'react-icons/fi';
import { RiDownloadCloudFill } from 'react-icons/ri';
import styles from '../styles/Download.module.scss'

export default function Download() {
    return (
        <div className={styles.container}>
            <Head>
                <title>SiteRO | Download</title>
            </Head>
            <div className={styles.title}>
                <h1>Download</h1>
                <p>Baixe o nosso jogo e se divirta muito, jogo totalmente gratuito.</p>
            </div>
            <div className={styles.wrapper}>
                <ul className={styles.downloadList}>
                    <li className={styles.downloadItem}>
                        <div className={styles.image}>
                            <img src="download1.png" alt="download1" />
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
                            <img src="download2.png" alt="download1" />
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
                            <img src="download3.png" alt="download1" />
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
                            <img src="download4.png" alt="download1" />
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
            <div className={styles.background}>
                <img src="download.png" alt="download" />
            </div>
        </div>
    )
}
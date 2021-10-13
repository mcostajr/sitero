import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/Info.module.scss'

export default function Info() {
    return (
        <div className={styles.container}>
            <Head>
                <title>SiteRO | Info</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.background}>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.aventureiro}>
                    <Image 
                        src="/aventureiro.png" 
                        alt="aventureiro"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className={styles.information}>
                    <h1>INFORMAÇÕES</h1>
                    <ul className={styles.ballonList}>
                        <li className={styles.ballon}>
                            <h2>INFORMAÇÕES GERAIS</h2>
                            <ul>
                                <li>
                                    <span>EPISÓDIO: </span>
                                    <span>10.3 Noghaltz</span>
                                </li>
                                <li>
                                    <span>LEVEL MAX.</span>
                                    <span>99/70</span>
                                </li>
                                <li>
                                    <span>ATRIBUTOS MAX.</span>
                                    <span>99</span>
                                </li>
                                <li>
                                    <span>ASPD MAX.</span>
                                    <span>190</span>
                                </li>
                                <li>
                                    <span>COMPARTILHAMENTO DE EXP</span>
                                    <span>15 Levels</span>
                                </li>
                            </ul>
                        </li>
                        <li className={styles.ballon}>
                            <h2>Rates</h2>
                            <ul>
                                <li>
                                    <span>EXP BASE E CLASSE</span>
                                    <span>20x</span>
                                </li>
                                <li>
                                    <span>EXP QUEST</span>
                                    <span>20x</span>
                                </li>
                                <li>
                                    <span>DROP DE ITENS</span>
                                    <span>10x</span>
                                </li>
                                <li>
                                    <span>DROP DE CARTAS</span>
                                    <span>10x</span>
                                </li>
                                <li>
                                    <span>DROP DE CARTAS MINI BOSS</span>
                                    <span>1x</span>
                                </li>
                                <li>
                                    <span>DROP DE CARTAS MVP</span>
                                    <span>1x</span>
                                </li>
                            </ul>
                        </li>
                        <li className={styles.ballon}>
                            <h2>SISTEMAS EXCLUSIVOS & EVENTOS</h2>
                            <ul className={styles.eventsList}>
                                <li><span>Sistema RMT (Seguro)</span></li>
                                <li><span>Achievements</span></li>
                                <li><span>Sala de Treinamento</span></li>
                                <li><span>Monstro Campeão</span></li>
                                <li><span>Devil Square Exclusiva</span></li>
                                <li><span>Evento PvP Global Exclusivo</span></li>
                                <li><span>Batalha Campal</span></li>
                                <li><span>e muito mais...</span></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className={styles.aventureiro}>
                    <Image 
                        src="/aventureira.png" 
                        alt="aventureira"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
            </div>
        </div>
    )
}
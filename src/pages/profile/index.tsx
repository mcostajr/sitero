import Head from 'next/head';
import Image from 'next/image';

import { ReactNode, useState } from "react";

import styles from '../../styles/Profile.module.scss';
import Sidebar from "../../components/Sidebar";

type Player = {
    name: string
}

export type ProfileProps = {
    children?: ReactNode;
    player: Player
}

export default function Profile({children,player}: ProfileProps) {

    return (
        <div className={styles.container}>
            <Head>
                <title>SiteRO | Profile</title>
            </Head>
            <main className={styles.wrapper}>
                <div className={styles.banner} style={{backgroundImage: 'url(/capa.jpg)'}}>
                </div>
                <div className={styles.profile}>
                    <div className={styles.subprofile}>
                        <div className={styles.moldier}>
                            <Image 
                                src="/avatar.jpg"
                                alt="photo"
                                width="180px"
                                height="180px"
                            />
                        </div>
                        <div className={styles.name}>
                            <h1>{player?.name}</h1>
                        </div>
                    </div>
                </div>
                <div className={styles.subWrapper}>
                    <Sidebar/>
                    <div className={styles.newpage}>
                        {children}
                    </div>
                </div>
            </main>
        </div>
    )
}
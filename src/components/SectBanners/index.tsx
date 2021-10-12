import Link from 'next/link';
import Image from 'next/image';
import "react-multi-carousel/lib/styles.css";

import styles from './styles.module.scss'

export default function Banners() {
    return (
      <section className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.subWrapper}>
            <h1>PARTICIPE DA NOSSA COMUNIDADE</h1>
            <Link href="/register" passHref><button>PARTICIPAR AGORA</button></Link>
          </div>
          <div className={styles.logos}>
            <Image
              layout="fill"
              objectFit="cover"
              src="/capa.png"
              alt="capa"
            />
          </div>
        </div>
      </section>
    )
}
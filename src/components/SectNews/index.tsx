import Image from 'next/image'
import { FiHeart } from 'react-icons/fi'

import styles from './styles.module.scss'

export default function News() { 
    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    <i>
                        <FiHeart className={styles.icon}/>
                    </i>
                    <h3>Novidades</h3>
                </div>
                <div className={styles.description}>
                    <p>Fique por dentro das novidades do servidor</p>
                </div>
                <div className={styles.listNews}>
                    <div className={styles.itemNews}>
                        <Image width='270' height='170' src="/patchnote/news.jpg" alt="patch" />
                        <div className={styles.information}>
                            <span>NOVEMBRO PATCH | MUITAS MUDANÇAS</span>
                            <p>Mudanças feitas nesse mes de novembro muitas novidades, confira agora algumas mudanças feitas pela nossa equipe c em conjsunto aos jogadores. clique no botao logo a baixo para saber mais informações</p>
                            <div>
                                <button>Leia Mais...</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.itemNews}>
                        <Image width='270' height='170' src="/patchnote/update.jpg" alt="patch" />
                        <div className={styles.information}>
                            <span>NOVEMBRO PATCH | MUITAS MUDANÇAS</span>
                            <p>Mudanças feitas nesse mes de novembro muitas novidades, confira agora algumas mudanças feitas pela nossa equipe c em conjsunto aos jogadores. clique no botao logo a baixo para saber mais informações</p>
                            <div>
                                <button>Leia Mais...</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.itemNews}>
                        <Image width='270' height='170' src="/patchnote/events.jpg" alt="patch" />
                        <div className={styles.information}>
                            <span>NOVEMBRO PATCH | MUITAS MUDANÇAS</span>
                            <p>Mudanças feitas nesse mes de novembro muitas novidades, confira agora algumas mudanças feitas pela nossa equipe c em conjsunto aos jogadores. clique no botao logo a baixo para saber mais informações</p>
                            <div>
                                <button>Leia Mais...</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
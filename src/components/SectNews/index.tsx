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
                    <p>dadyeagydegaydgeyagdyegaydgyaegdyeagdadeadadad addddddddddddddddddddddddddddddddddddddddddddddddddddddddddd ddddddddyd</p>
                </div>
                <div className={styles.listNews}>
                    <div className={styles.itemNews}>
                        <img src="/patchnote/patch.jpg" alt="patch" />
                        <div className={styles.information}>
                            <span>20/12/2021 PATCH</span>
                            <p>Algumas mudancasadadheaudhueadhueahduheaudhuea dasobrwe dhaudheuahduea daeudheaud eadeahdueahduehaudheauhdueahu aedhaudhueahduha</p>
                            <div>
                                <button>Leia Mais...</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.itemNews}>
                        <img src="/patchnote/patch.jpg" alt="patch" />
                        <div className={styles.information}>
                            <span>20/12/2021 PATCH</span>
                            <p>Algumas mudancasadadheaudhueadhueahduheaudhuea dasobrwe dhaudheuahduea daeudheaud eadeahdueahduehaudheauhdueahu aedhaudhueahduha</p>
                            <div>
                                <button>Leia Mais...</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.itemNews}>
                        <img src="/patchnote/patch.jpg" alt="patch" />
                        <div className={styles.information}>
                            <span>20/12/2021 PATCH</span>
                            <p>Algumas mudancasadadheaudhueadhueahduheaudhuea dasobrwe dhaudheuahduea daeudheaud eadeahdueahduehaudheauhdueahu aedhaudhueahduha</p>
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
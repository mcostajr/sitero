import styles from './styles.module.scss'

export default function News() { 
    return (
        <section className={styles.news}>
            <div className={styles.newsContainer}>
                <div className={styles.titleNews}>
                    <h3>Novidades</h3>
                    <p>dadyeagydegaydgeyagdyegaydgyaegdyeagdadeadadad addddddddddddddddddddddddddddddddddddddddddddddddddddddddddd ddddddddyd</p>
                </div>
                <div className={styles.listNews}>
                    <div className={styles.infoNews}>
                        <img src="/patchnote/patch.jpg" alt="patch" />
                        <h5>20/12/2021 PATCH</h5>
                        <p>Algumas mudancasadadheaudhueadhueahduheaudhuea dasobrwe dhaudheuahduea daeudheaud eadeahdueahduehaudheauhdueahu aedhaudhueahduha</p>
                        <button>Leia Mais...</button>
                    </div>
                    <div className={styles.infoNews}>
                        <img src="/patchnote/patch.jpg" alt="patch" />
                        <h5>20/12/2021 PATCH</h5>
                        <p>Algumas mudancasadadheaudhueadhueahduheaudhuea dasobrwe dhaudheuahduea daeudheaud eadeahdueahduehaudheauhdueahu aedhaudhueahduha</p>
                        <button>Leia Mais...</button>
                    </div>
                    <div className={styles.infoNews}>
                        <img src="/patchnote/patch.jpg" alt="patch" />
                        <h5>20/12/2021 PATCH</h5>
                        <p>Algumas mudancasadadheaudhueadhueahduheaudhuea dasobrwe dhaudheuahduea daeudheaud eadeahdueahduehaudheauhdueahu aedhaudhueahduha</p>
                        <button>Leia Mais...</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
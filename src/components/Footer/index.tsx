import styles from './styles.module.scss'

export default function Footer() {

    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
            <div className={styles.upper}>
                <div className={styles.part}>
                <h5>SOBRE RAGNAROK ONLINE</h5>
                <p>Estamos construindo a maior comunidade de ragnarok privado do Brasil, venha fazer parte dessa aventura , conhecer novas pessoas e ajudar com o desenvolvimento do jogo. Lembre-se que você é quem faz o jogo.</p>
                </div>
                <div className={styles.part}>
                <h5>MANUTENÇÃO E CHANGELOG</h5>
                <ul className={styles.list}>
                    <li>
                    <div className={styles.title}><span>PATCH | NOVOS ITENS</span></div>
                    <div className={styles.data}><span>01/10/2021</span></div>
                    </li>
                    <li>
                    <div className={styles.title}><span>PATCH | NOVOS ITENS</span></div>
                    <div className={styles.data}><span>01/10/2021</span></div>
                    </li>
                    <li>
                    <div className={styles.title}><span>PATCH | NOVOS ITENS</span></div>
                    <div className={styles.data}><span>01/10/2021</span></div>
                    </li>
                    <li>
                    <div className={styles.title}><span>PATCH | NOVOS ITENS</span></div>
                    <div className={styles.data}><span>01/10/2021</span></div>
                    </li>
                </ul>
                </div>
                <div className={styles.part}>
                <h5>REDE SOCIAL</h5>
                <span>Facebook</span>
                </div>
            </div>
            <div className={styles.lower}>
                <div>
                <p>2021 @ Todo os direitos reservados.</p>
                <p>Desenhado e Codificado por: <strong>Mauro Freire</strong></p>
                </div>
            </div>
            </div>
        </footer>
    )
}
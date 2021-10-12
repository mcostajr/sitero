import Image from 'next/image'
import styles from './styles.module.scss'

export default function Info() {
    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.information}>
                    <h3>SEJA BEM VINDO AO RAGNAROK ONLINE</h3>
                    <p>Bem-vindo ao SiteRo! Você está procurando um novo servidor privado para jogar?
                    O Ragnarok é considerado um dos servidores online mais confiáveis da atualidade, somos um servidor Low-rate 50x / 50x / 10x e nunca tivemos e nunca teremos um wipe.
                    Isso significa que você pode jogar quando quiser e se decidir fazer uma pausa curta ou longa quando voltar, seus itens e sua conta estarão lá para você!</p>
                </div>
                <div className={styles.image}>
                    <Image 
                        alt="info"
                        src="/info.png"
                        width={250}
                        height={250}
                    />
                </div>
                <div className={styles.acess}>
                    <h3>ACESSAR PAINEL DE CONTROLE</h3>
                    <form>
                        <input type="text" placeholder="Username"/>
                        <input type="password" placeholder="Password"/>
                        <div>
                            <a>Esqueci a Senha</a>
                            <a>Registrar-se</a>
                        </div>
                        <button>FAZER LOGIN</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
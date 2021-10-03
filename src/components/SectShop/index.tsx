import Image from 'next/image'
import { FaStar } from 'react-icons/fa'
import styles from './styles.module.scss'

export default function NewsShop() {
    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    <i><FaStar className={styles.icon}/></i>
                    <h3>Loja</h3>
                </div>
                <div className={styles.description}>
                    <p>Novidades da nossa Loja de Cash, esses são algumas das novidades.</p>
                </div>
                <div className={styles.listShop}>
                    <div className={styles.itemShop}>
                        <Image src='/itens/item.jpg' width={100} height={100}/>
                        <button>R$ 10,00</button>
                        <span>Nome</span>
                        <div>
                            <p>Descritr aodeadea dheaud hueahdueahu dheau dhaeu ahduea</p>
                        </div>
                    </div>
                    <div className={styles.itemShop}>
                        <Image src='/itens/item.jpg' width={100} height={100}/>
                        <button>R$ 10,00</button>
                        <span>Nome</span>
                        <div>
                            <p>Descritr aodeadea dheaud hueahdueahu dheau dhaeu ahduea</p>
                        </div>
                    </div>
                    <div className={styles.itemShop}>
                        <Image src='/itens/item.jpg' width={100} height={100}/>
                        <button>R$ 10,00</button>
                        <span>Nome</span>
                        <div>
                            <p>Descritr aodeadea dheaud hueahdueahu dheau dhaeu ahduea</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
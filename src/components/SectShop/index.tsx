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
                    <p>Confira nossas ultimas novidades</p>
                </div>
                <div className={styles.sliderShop}>
                    <button className={styles.button}>{'<'}</button>
                    <ul className={styles.listShop}>
                        <li className={styles.itemShop}>
                            <Image src='/itens/1.bmp' width='75px' height='100px'/>
                            <button>R$ 10,00</button>
                            <span>Chapeu Poring</span>
                            <div>
                                <p>Descritr aodeadea dheaud hueahdueahu dheau dhaeu ahduea</p>
                            </div>
                        </li>
                        <li className={styles.itemShop}>
                            <Image src='/itens/2.bmp' width='75px' height='100px'/>
                            <button>R$ 10,00</button>
                            <span>Elmo Ghost</span>
                            <div>
                                <p>Descritr aodeadea dheaud hueahdueahu dheau dhaeu ahduea</p>
                            </div>
                        </li>
                        <li className={styles.itemShop}>
                            <Image src='/itens/3.bmp' width='75px' height='100px'/>
                            <button>R$ 10,00</button>
                            <span>Laços Vermelho</span>
                            <div>
                                <p>Descritr aodeadea dheaud hueahdueahu dheau dhaeu ahduea</p>
                            </div>
                        </li>
                        <li className={styles.itemShop}>
                            <Image src='/itens/4.bmp' width='75px' height={100}/>
                            <button>R$ 10,00</button>
                            <span>Headset Coelhinho</span>
                            <div>
                                <p>Descritr aodeadea dheaud hueahdueahu dheau dhaeu ahduea</p>
                            </div>
                        </li>
                    </ul>
                    <button className={styles.button}>{'>'}</button>
                </div>
            </div>
        </section>
    )
}
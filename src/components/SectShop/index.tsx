import Image from 'next/image'
import styles from './styles.module.scss'

export default function NewsShop() {
    return (
        <section className={styles.lastshop}>
            <div className={styles.container}>
                <div className={styles.titleShop}>
                    <h3>Loja</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className={styles.listShop}>
                    <div className={styles.item}>
                        <Image src='/itens/item.jpg' width={100} height={100}/>
                        <div><span>R$ 10,00</span></div>
                        <span>Nome</span>
                        <p>Descritr aodeadea dheaud hueahdueahu dheau dhaeu ahduea</p>
                    </div>
                    <div className={styles.item}>
                        <Image src='/itens/item.jpg' width={100} height={100}/>
                        <div><span>R$ 10,00</span></div>
                        <span>Nome</span>
                        <p>Descritr aodeadea dheaud hueahdueahu dheau dhaeu ahduea</p>
                    </div>
                    <div className={styles.item}>
                        <Image src='/itens/item.jpg' width={100} height={100}/>
                        <div><span>R$ 10,00</span></div>
                        <span>Nome</span>
                        <p>Descritr aodeadea dheaud hueahdueahu dheau dhaeu ahduea</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'

import styles from './styles.module.scss';

const options = [
    { id: 0, name: 'Editar Perfil', href: 'edit'},
    { id: 1, name: 'Carteira', href: 'wallet'},
    { id: 2, name: 'Personagens', href: 'character'},
    { id: 3, name: 'Ticket', href: 'ticket'}
]

export default function Sidebar() {

    const [toggleMenu, settoggleMenu] = useState<Boolean[]>([]);
    const router = useRouter()
    const { pathname } = router

    useEffect(() => {
        const array = options.map((op) => {
            if(op.href == pathname.substr(9,pathname.length)) {
                return true;
            }
            return false;
        })
        settoggleMenu(array)
    },[pathname])

    return (
        <aside className={styles.container}>
            <nav className={styles.navigation}>
                <ul>
                    {options.map(option => {
                        return (
                            <Link href={`/profile/${option.href}`} key={option.id} passHref>
                                <li className={toggleMenu[option.id] ? styles.active : ''}>
                                    <b className={styles.b1} /><b className={styles.b2} />
                                    <span className={styles.button}>{option.name}</span>
                                </li>
                            </Link>
                        )
                    })}
                </ul>
            </nav>
        </aside>
    )
}
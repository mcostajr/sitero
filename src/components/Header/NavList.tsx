
import { useState } from 'react';
import Link from 'next/link'

import styles from './styles.module.scss'

export const options = [
    {id: 1, href: '/', name: 'Inicio'},
    {id: 2, href: '/download', name: 'Downloads'},
    {id: 3, href: '/info', name: 'Info'},
    {id: 4, href: '/ranking', name: 'Ranking'},
    {id: 5, href: '/donation', name: 'Doações'},
    {id: 6, href: '/register', name: 'Registrar'},
    // {id: 7, href: '/jobs', name: 'Classes'},
]

export default function NavList() {

    const [active,setActive] = useState(0);
  
    function toggleActive(id: number) {
      setActive(id);
    }
  
    return (
      <nav className={styles.navigation}>
        <ul className={styles.navigationList}>
          {options.map(option => {
            return (
              <li 
                key={option.id} 
                className={styles.navigationItem} 
                onClick={() => toggleActive(option.id)}
              >
                <Link href={option.href}>
                  <a className={option.id == active ? styles.active : ''}>
                    {option.name}
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }
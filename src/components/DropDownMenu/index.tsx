import { useContext, useEffect, useRef } from 'react';
import Link from 'next/link';

import { MenuContext } from '../../contexts/MenuContext';

import styles from './styles.module.scss';
import { AiOutlineClose } from 'react-icons/ai';
import { useSession } from 'next-auth/client';
import DropDownOptions from '../DropDownOptions';
import { options } from '../Header/NavList';

export default function DropdownMenu() {

    const [ session, loading ] = useSession();
    const { handleClickOutside, toggleMenu } = useContext(MenuContext);
  
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      document.addEventListener("mousedown", (e) => handleClickOutside(divRef, e));

      return () => {
        document.removeEventListener("mousedown", (e) => handleClickOutside(divRef, e));
      }
    })

    return (
      <>
        <aside className={styles.container} ref={divRef}>
          <div className={styles.header}>
            <div className={styles.button}>
              <AiOutlineClose onClick={() => toggleMenu()} className={styles.close}/>
            </div>
          </div>
          <nav className={styles.firstInfo}>
            <ul className={styles.listNav}>
              {options.map(option => {
                return (
                  <Link href={option.href} key={option.id}><li><a>{option.name}</a></li></Link>
                )
              })}
            </ul>
          </nav>
          <hr />
          <div className={styles.secondInfo}>
            {session && <DropDownOptions/>}
          </div>
        </aside>

        <div className={styles.overlay}>
          <div className={styles.overlayActive}></div>
        </div>
      </>
    )
  }
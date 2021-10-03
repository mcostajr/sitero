import { useContext, useEffect, useRef } from 'react';
import { LoginContext } from '../../contexts/LoginContext';
import { MenuContext } from '../../contexts/MenuContext';
import { NavList } from '../Header';
import Login from '../Login';
import Profile from '../Profile';

import styles from './styles.module.scss';

export default function DropdownMenu() {

    const { user } = useContext(LoginContext);
    const { open, handleClickOutside } = useContext(MenuContext);
  
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      document.addEventListener("mousedown", (e) => handleClickOutside(divRef, e));

      return () => {
        document.removeEventListener("mousedown", (e) => handleClickOutside(divRef, e));
      }
    })

    return (
      <>
      {open && (
        <>
        <aside className={styles.container} ref={divRef}>
          <nav className={styles.firstInfo}>
            <ul className={styles.listNav}>
              <NavList/>
            </ul>
          </nav>
          <hr />
          <div className={styles.secondInfo}>
            {user ? (
              <Profile/>
            ):
            (
              <Login/>
            )}
          </div>
        </aside>

        <div className={styles.overlay}>
          <div className={styles.overlayActive}></div>
        </div>
        </>
      )}
      </>
    )
  }
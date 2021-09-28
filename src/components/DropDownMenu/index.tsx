import { useContext } from 'react';
import { LoginContext } from '../../contexts/LoginContext';
import { MenuContext } from '../../contexts/MenuContext';
import { NavList } from '../Header';
import Login from '../Login';
import Profile from '../Profile';

import styles from './styles.module.scss';

export default function DropdownMenu() {

    const { user } = useContext(LoginContext);
    const { open } = useContext(MenuContext);
  
    return (
      <>
        {open && (
          <div className={styles.container}>
            <ul className={styles.firstInfo}>
              <NavList/>
            </ul>
            <div className={styles.secondInfo}>
              {user ? (
                <Profile/>
              ):
              (
                <Login/>
              )}
            </div>
          </div>
        )}
      </>
    )
  }
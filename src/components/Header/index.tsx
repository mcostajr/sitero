import Link from 'next/link'
import Image from 'next/image'
import React, { useContext } from 'react';
import { AiOutlineMenu, AiOutlineDown} from 'react-icons/ai'
import { FaRegUserCircle } from 'react-icons/fa'

import { MenuContext } from '../../contexts/MenuContext';
import { LoginContext } from '../../contexts/LoginContext';
import DropDownLogin from '../DropDownLogin';
import styles from './styles.module.scss'

export default function Header() {
  const { openLogin } = useContext(MenuContext)

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Image
            src="/logo.png"
            alt="logo"
            width={200}
            height={100}
          />
        </div>
        <div className={styles.navigation}>
          <NavBar/>
        </div>
      </div>
      {openLogin && <DropDownLogin/>}
    </div>
  )
}

export function NavList() {
  return (
    <>
      <NavItem href="/">Inicio</NavItem>
      <NavItem href="/download">Downloads</NavItem>
      <NavItem href="/ranking">Ranking</NavItem>
      <NavItem href="/donation">Doações</NavItem>
      <NavItem href="/register">Registrar</NavItem>
      <NavItem href="/forum">Forum</NavItem>
      <NavItem href="/support">Suporte</NavItem>
    </>
  )
}

function NavItem(props) {
  return (
    <li>
      <Link href={props.href}>
        <a>{props.children}</a>
      </Link>
    </li>
  )
}

function NavBar() {
  
  const { toggleMenu, toggleMenuLogin } = useContext(MenuContext);
  const { user } = useContext(LoginContext);
  
  return (
      <>
        <nav className={styles.navigationBase}>
          <ul className={styles.navigationList}>
            <NavList/>
          </ul>
          <div className={styles.login}>
              <FaRegUserCircle className={styles.avatar}/>
              <span>{user ? user.name : 'Visitante'}</span>
              <AiOutlineDown className={styles.buttonDropDownLogin} onClick={() => toggleMenuLogin()}/>
          </div>
        </nav>

        <nav className={styles.navigationButton}>
          <AiOutlineMenu 
            className={styles.button}
            onClick={() => toggleMenu()}
          />
        </nav>
      </>
  )
}
import Link from 'next/link'
import Image from 'next/image'
import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { AiOutlineMenu, AiOutlineDown} from 'react-icons/ai'
import { FaRegUserCircle } from 'react-icons/fa'

import { MenuContext } from '../../contexts/MenuContext';
import { LoginContext } from '../../contexts/LoginContext';
import DropDownLogin from '../DropDownLogin';
import DropdownMenu from '../DropDownMenu';

import styles from './styles.module.scss'

export default function Header() {
  
  const [isSticky, setSticky] = useState(false);
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
        if(divRef.current!.getBoundingClientRect().width > 768) {
          window.scrollY > divRef.current!.getBoundingClientRect().bottom
          ? setSticky(true)
          : setSticky(false)
        }
    }
  
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  })

  return (
    <header className={`${styles.container} ${isSticky ? styles.sticky : ''}`} ref={divRef}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Image
            src="/logo.png"
            alt="logo"
            layout="fill"
            className={styles.image}
          />
        </div>
        <NavBar/>
        <ProfInfo/>
        <ButtonMenu/>
        <DropdownMenu/>
      </div>
    </header>
  )
}

function ButtonMenu() {

  const { toggleMenu } = useContext(MenuContext);

  return (
    <div className={styles.containerButtonMenu}>
      <button 
        className={styles.button} 
        onClick={() => toggleMenu()}
      >
        <AiOutlineMenu className={styles.icon} />
      </button>
    </div>
  )
}

function ProfInfo() {

  const { user } = useContext(LoginContext);
  const { toggleMenuLogin } = useContext(MenuContext)
  
  return (
    <div className={styles.login}>
      <FaRegUserCircle className={styles.avatar}/>
      <span>{user ? user.name : 'Visitante'}</span>
      <AiOutlineDown className={styles.buttonDropDownLogin} onClick={() => toggleMenuLogin()}/>
      <DropDownLogin/>
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

function NavItem(props: any) {
  return (
    <li className={styles.navigationItem}>
      <Link href={props.href}>
        <a>{props.children}</a>
      </Link>
    </li>
  )
}

function NavBar() {
  
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigationList}>
        <NavList/>
      </ul>
    </nav>
  )
}
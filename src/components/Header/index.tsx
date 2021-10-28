import Image from 'next/image'
import Router, { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';

import DropdownMenu from '../DropDownMenu';
import ButtonMenu from './ButtonMenu';
import ProfInfo from './ProfInfo';
import NavList from './NavList';

import styles from './styles.module.scss'

export default function Header() {

  const [isSticky, setSticky] = useState(false);
  const divRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const handleScroll = () => {
    if(divRef.current!.getBoundingClientRect().width > 768) {
      (window.scrollY > divRef.current!.getBoundingClientRect().height
      ? setSticky(true)
      : setSticky(false))

    }
  }

  useEffect(() => {

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  })

  return (
    <header 
      className={`
        ${styles.container} 
        ${isSticky ? styles.sticky : ''} 
        ${router.pathname == "/" ? styles.transparent : ''}
      `} 
      ref={divRef}
    >
      <div className={styles.wrapper}>
        <Image
          src="/logo.png"
          alt="logo"
          layout='fixed'
          objectFit="cover"
          width="120px"
          height="80px"
          className={styles.logo}
          onClick={() => Router.push('/')}
        />
        <NavList/>
        <ProfInfo/>
        <ButtonMenu/>
      </div>
    </header>
  )
}
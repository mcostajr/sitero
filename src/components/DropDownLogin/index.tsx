import React, { useContext, useLayoutEffect, useRef } from "react";

import { LoginContext } from "../../contexts/LoginContext";
import { MenuContext } from "../../contexts/MenuContext";
import Login from "../Login";
import Profile from "../Profile";

import styles from './styles.module.scss'

export default function DropDownLogin() {

    const { toggleMenuLogin } = useContext(MenuContext);
    const { user } = useContext(LoginContext);
    
    const divRef = useRef<HTMLDivElement>(null);
  
    useLayoutEffect(() => {
      function handleClickOutside(event: React.ChangeEvent<HTMLInputElement>) {
        if (divRef.current && !divRef.current.contains(event.target)){
          toggleMenuLogin()
        }
      }
  
      document.addEventListener("mousedown", (e) => handleClickOutside(e));
  
      document.removeEventListener("mousedown", (e) => handleClickOutside(e));
    })
  
    return (
      <div className={styles.container} ref={divRef}>
        {user ? (
          <Profile />
        ): (
          <Login/>
        )}
      </div>
    )
  }
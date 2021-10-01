import React, { useContext, useEffect, useRef } from "react";

import { LoginContext } from "../../contexts/LoginContext";
import { MenuContext } from "../../contexts/MenuContext";
import Login from "../Login";
import Profile from "../Profile";

import styles from './styles.module.scss'

export default function DropDownLogin() {

    const { openLogin, handleClickOutside } = useContext(MenuContext);
    const { user } = useContext(LoginContext);
    
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      document.addEventListener("mousedown", (e) => handleClickOutside(divRef, e));

      return () => {
        document.removeEventListener("mousedown", (e) => handleClickOutside(divRef, e));
      }
    })
  
    return (
      <>
      {openLogin && 
        <div className={styles.container} ref={divRef}>
          {user ? (
            <Profile />
          ): (
            <Login/>
          )}
        </div>
      }
      </>
    )
  }
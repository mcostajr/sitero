import { useContext } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import { MenuContext } from "../../contexts/MenuContext";
import DropdownMenu from "../DropDownMenu";

import styles from './styles.module.scss'

export default function ButtonMenu() {

  const { openMenu, toggleMenu } = useContext(MenuContext);

  return (
    <div className={styles.containerButtonMenu}>
      <div 
        className={styles.button} 
        onClick={() => toggleMenu()}
      >
        <AiOutlineMenu className={styles.icon} />
      </div>
      {openMenu && <DropdownMenu/>}
    </div>
  )
}
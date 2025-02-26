"use client";

import { FC } from "react";
import styles from "@/app/ui/components/HeaderNavToggleButton/headerNavToggleButton.module.css";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface HeaderNavToggleButtonProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const HeaderNavToggleButton: FC<HeaderNavToggleButtonProps> = ({
  isMenuOpen,
  toggleMenu,
}) => {
  return (
    <button className={styles.button} onClick={toggleMenu}>
      {isMenuOpen ? (
        <XMarkIcon className={styles.xMark} />
      ) : (
        <Bars3Icon className={styles.bars3} />
      )}
    </button>
  );
};

export default HeaderNavToggleButton;

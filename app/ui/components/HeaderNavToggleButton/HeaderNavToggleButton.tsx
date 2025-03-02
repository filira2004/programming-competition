"use client";

import { FC } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import styles from "./headerNavToggleButton.module.css";

interface HeaderNavToggleButtonProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const HeaderNavToggleButton: FC<HeaderNavToggleButtonProps> = ({
  isMenuOpen,
  toggleMenu,
}) => {
  return (
    <button
      className={styles.button}
      onClick={toggleMenu}
      aria-label={isMenuOpen ? "Закрыть" : "Открыть"}
    >
      {isMenuOpen ? (
        <XMarkIcon className={styles.xMark} />
      ) : (
        <Bars3Icon className={styles.bars3} />
      )}
    </button>
  );
};

export default HeaderNavToggleButton;

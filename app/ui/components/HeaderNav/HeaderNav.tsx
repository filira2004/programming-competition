"use client";

import { FC } from "react";
import Link from "next/link";
import classNames from "classnames";
import styles from "./headerNav.module.css";

interface HeaderNavProps {
  isMenuOpen: boolean;
}

const HeaderNav: FC<HeaderNavProps> = ({ isMenuOpen }) => {
  return (
    <nav
      className={classNames(styles.nav, {
        [styles.navVisible]: isMenuOpen,
        [styles.navHidden]: !isMenuOpen,
      })}
    >
      <Link href="/login" className={styles.link}>
        <p className={styles.baseText}>Войти</p>
      </Link>
      <Link href="/login" className={styles.link}>
        <p className={styles.baseText}>Войти</p>
      </Link>
      <Link href="/login" className={styles.link}>
        <p className={styles.baseText}>Войти</p>
      </Link>
    </nav>
  );
};

export default HeaderNav;

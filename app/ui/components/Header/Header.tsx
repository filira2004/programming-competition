"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./header.module.css";
import PCLogo from "../PCLogo/PCLogo";
import HeaderNav from "../HeaderNav/HeaderNav";
import HeaderNavToggleButton from "../HeaderNavToggleButton/HeaderNavToggleButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.link}>
        <PCLogo />
      </Link>
      <HeaderNavToggleButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <HeaderNav isMenuOpen={isMenuOpen} />
    </header>
  );
};

export default Header;

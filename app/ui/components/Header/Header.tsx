"use client";

import { useState } from "react";
import styles from "@/app/ui/components/Header/header.module.css";
import PCLogo from "../PCLogo/PCLogo";
import HeaderNavToggleButton from "../HeaderNavToggleButton/HeaderNavToggleButton";
import HeaderNav from "../HeaderNav/HeaderNav";
import Link from "next/link";

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

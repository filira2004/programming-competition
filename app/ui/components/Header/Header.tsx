"use client";

import { FC, useState } from "react";
import Link from "next/link";
import styles from "./header.module.css";
import PCLogo from "../PCLogo/PCLogo";
import HeaderNav from "../HeaderNav/HeaderNav";
import HeaderNavToggleButton from "../HeaderNavToggleButton/HeaderNavToggleButton";
import { Session } from "next-auth";

interface HeaderProps {
  session: Session | null;
}

const Header: FC<HeaderProps> = ({ session }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <Link href="/" scroll={false} className={styles.link}>
        <PCLogo />
      </Link>
      <HeaderNavToggleButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <HeaderNav isMenuOpen={isMenuOpen} session={session}/>
    </header>
  );
};

export default Header;

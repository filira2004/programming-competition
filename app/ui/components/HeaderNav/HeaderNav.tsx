"use client";

import { FC } from "react";
import Link from "next/link";
import classNames from "classnames";
import styles from "./headerNav.module.css";
import { links } from "@/app/lib/constants";
import { usePathname } from "next/navigation";

interface HeaderNavProps {
  isMenuOpen: boolean;
}

const HeaderNav: FC<HeaderNavProps> = ({ isMenuOpen }) => {
  const pathname = usePathname();

  return (
    <nav
      className={classNames(styles.nav, {
        [styles.navVisible]: isMenuOpen,
        [styles.navHidden]: !isMenuOpen,
      })}
    >
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={classNames(styles.link, {
            [styles.activeLink]: pathname === link.href,
          })}
        >
          <p className={styles.baseText}>{link.name}</p>
        </Link>
      ))}
      <Link
        href="/login"
        className={classNames(styles.link, {
          [styles.activeLink]: pathname === "/login",
        })}
      >
        <p className={styles.baseText}>Войти</p>
      </Link>
    </nav>
  );
};

export default HeaderNav;

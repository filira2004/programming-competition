"use client";

import { FC } from "react";
import Link from "next/link";
import classNames from "classnames";
import styles from "./headerNav.module.css";
import { links } from "@/app/lib/constants";
import { usePathname } from "next/navigation";
import { Session } from "next-auth";
import { singOutOfAccount } from "@/app/lib/actions";

interface HeaderNavProps {
  isMenuOpen: boolean;
  session: Session | null;
}

const HeaderNav: FC<HeaderNavProps> = ({ isMenuOpen, session }) => {
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
      {!session ? (
        <Link
          href="/login"
          className={classNames(styles.link, {
            [styles.activeLink]: pathname === "/login",
          })}
        >
          <p className={styles.baseText}>Войти</p>
        </Link>
      ) : (
        <>
          <Link
            href="/admin/competitions/create"
            className={classNames(styles.link, {
              [styles.activeLink]: pathname === "/admin/competitions/create",
            })}
          >
            <p className={styles.baseText}>Создать соревнование</p>
          </Link>
          <form action={singOutOfAccount}>
            <button type="submit" className={styles.signOutButton}>
              Выйти
            </button>
          </form>
        </>
      )}
    </nav>
  );
};

export default HeaderNav;

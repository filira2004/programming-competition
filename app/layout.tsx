import "./ui/globals.css";
import { inter } from "./ui/font";
import classNames from "classnames";
import Header from "./ui/components/Header/Header";
import styles from "./layout.module.css";
import Footer from "./ui/components/Footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={classNames(inter.className, styles.body)}>
        <Header />
        <main className={styles.main}>
          <div className={styles.wrapper}>{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}

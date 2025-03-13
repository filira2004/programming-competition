import "./ui/globals.css";
import { inter } from "./ui/font";
import classNames from "classnames";
import Header from "./ui/components/Header/Header";
import styles from "./layout.module.css";
import Footer from "./ui/components/Footer/Footer";
import { auth } from "@/auth";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  
  return (
    <html lang="ru">
      <body className={classNames(inter.className, styles.body)}>
        <Header session={session} />
        <main className={styles.main}>
          <div className={styles.wrapper}>{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}

import "@/app/ui/globals.css";
import { inter } from "./ui/font";
import styles from "@/app/layout.module.css";
import Header from "./ui/components/Header/Header";
import Footer from "./ui/components/Footer/Footer";
import classNames from "classnames";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={classNames(inter.className, styles.body)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

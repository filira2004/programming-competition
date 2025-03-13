import "./ui/globals.css";
import { inter } from "./ui/font";
import classNames from "classnames";
import Header from "./ui/components/Header/Header";
import styles from "./layout.module.css";
import Footer from "./ui/components/Footer/Footer";
import { auth } from "@/auth";

export const metadata = {
  title: "PCompetitions",
  description:
    "PCompetitions — платформа для отслеживания результатов и информации о олимпиадах по программированию. Следите за рейтингами, расписанием и анализируйте выступления участников.",
  icons: {
    icon: [
      {
        rel: "icon",
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" },
    ],
  },
};

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

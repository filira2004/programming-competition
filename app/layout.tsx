import "@/app/ui/globals.css";
import { inter } from "./ui/font";
import Header from "./ui/components/Header/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Header />
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}

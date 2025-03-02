import styles from "./footer.module.css";

const Footer = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.paragraph}>
        © «Programming competition», {currentYear}
      </p>
    </footer>
  );
};
export default Footer;

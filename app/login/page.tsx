import LoginForm from "../ui/components/LoginForm/LoginForm";
import PCLogo from "../ui/components/PCLogo/PCLogo";
import styles from "./loginPage.module.css";

const Page = () => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.logoWrapper}>
          <PCLogo />
        </div>
        <div className={styles.formWrapper}>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Page;

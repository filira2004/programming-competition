import CreateForm from "@/app/ui/components/CreateCompetitionPage/CreateForm/CreateForm";
import styles from "./createCompetitions.module.css";

const Page = () => {
  return (
    <div>
      <h1 className={styles.titleH1}>Создать соревнование</h1>

      <div className={styles.wrapper}>
        <CreateForm />
      </div>
    </div>
  );
};

export default Page;

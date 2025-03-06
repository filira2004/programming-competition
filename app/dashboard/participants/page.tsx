import Participants from "@/app/ui/components/ParticipantsPage/Participants/Participants";
import styles from "./participantsPage.module.css";

const Page = () => {
  return (
    <div>
      <h1 className={styles.titleH1}>Список участников</h1>

      <div className={styles.wrapper}>
        <Participants />
      </div>
    </div>
  );
};

export default Page;

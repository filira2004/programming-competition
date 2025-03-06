import { fetchCachedAllCoaches } from "@/app/lib/data";
import { CoachType } from "@/app/lib/definitions";
import styles from "./coaches.module.css";
import Coach from "../Coach/Coach";

const Coaches = async () => {
  const coaches: CoachType[] = await fetchCachedAllCoaches();

  return (
    <div className={styles.wrapper}>
      {coaches.map((coache) => (
        <Coach key={coache.id} {...coache} />
      ))}
    </div>
  );
};

export default Coaches;

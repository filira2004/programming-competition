import { createCompetition } from "@/app/lib/actions";
import styles from "./createForm.module.css";
import classNames from "classnames";

const CreateForm = () => {
  return (
    <form action={createCompetition} className={styles.form}>
      <section>
        <h2 className={styles.titleH2}>Мероприятие</h2>
        <label
          htmlFor="eventName"
          className={classNames(styles.label, styles.baseText)}
        >
          Название мероприятия
        </label>
        <input
          type="text"
          id="eventName"
          name="eventName"
          className={styles.input}
          required
          maxLength={1000}
        />
      </section>
      <section>
        <h2 className={styles.titleH2}>Дата мероприятия</h2>
        <label
          htmlFor="date"
          className={classNames(styles.label, styles.baseText)}
        >
          Выберите дату
        </label>
        <input
          type="date"
          id="date"
          name="date"
          className={styles.input}
          required
        />
      </section>

      <section>
        <h2 className={styles.titleH2}>Организатор мероприятия</h2>
        <label
          htmlFor="organizerName"
          className={classNames(styles.label, styles.baseText)}
        >
          Название организатор
        </label>
        <input
          type="text"
          id="organizerName"
          name="organizerName"
          className={styles.input}
          required
          maxLength={500}
        />

        <label
          htmlFor="organizerType"
          className={classNames(styles.label, styles.baseText)}
        >
          Тип организации
        </label>
        <select
          id="organizerType"
          name="organizerType"
          className={styles.input}
          required
        >
          <option>Государственная</option>
          <option>Частная</option>
          <option>Корпоративная</option>
        </select>

        <label
          htmlFor="organizerContactInfo"
          className={classNames(styles.label, styles.baseText)}
        >
          Контактная информация
        </label>
        <textarea
          id="organizerContactInfo"
          name="organizerContactInfo"
          className={styles.input}
          required
          maxLength={5000}
        ></textarea>
      </section>

      <section>
        <h2 className={styles.titleH2}>Место проведения</h2>
        <label
          htmlFor="venueAddress"
          className={classNames(styles.label, styles.baseText)}
        >
          Адрес места
        </label>
        <input
          type="text"
          id="venueAddress"
          name="venueAddress"
          className={styles.input}
          required
          maxLength={1000}
        />

        <label
          htmlFor="venueName"
          className={classNames(styles.label, styles.baseText)}
        >
          Название места проведения
        </label>
        <input
          type="text"
          id="venueName"
          name="venueName"
          className={styles.input}
          required
          maxLength={1000}
        />

        <label
          htmlFor="venueCapacity"
          className={classNames(styles.label, styles.baseText)}
        >
          Вместимость места проведения
        </label>
        <input
          type="number"
          id="venueCapacity"
          name="venueCapacity"
          className={styles.input}
          required
          min={1}
        />
      </section>

      <button type="submit" className={styles.submitButton}>Создать мероприятие</button>
    </form>
  );
};

export default CreateForm;

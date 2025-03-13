"use client";

import classNames from "classnames";
import styles from "./loginForm.module.css";
import { authenticate } from "@/app/lib/actions";
import { useSearchParams } from "next/navigation";
import { useActionState } from "react";

const LoginForm = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  return (
    <form action={formAction} className={styles.form}>
      <h1 className={styles.titleH1}>Войтиде, чтобы продолжить</h1>
      <div className={styles.inputWrapper}>
        <label
          htmlFor="email"
          className={classNames(styles.label, styles.baseText)}
        >
          Почта
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className={styles.input}
          required
          maxLength={500}
          placeholder="Введите адрес почты"
        />
      </div>
      <div className={styles.inputWrapper}>
        <label
          htmlFor="password"
          className={classNames(styles.label, styles.baseText)}
        >
          Пароль
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className={styles.input}
          required
          maxLength={500}
          minLength={6}
          placeholder="Введите пароль"
        />
      </div>

      <input type="hidden" name="redirectTo" value={callbackUrl} />
      <button className={styles.submitButton} aria-disabled={isPending}>
        Войти
      </button>
      <div
        className={styles.errorWrapper}
        aria-live="polite"
        aria-atomic="true"
      >
        {errorMessage && (
          <>
            <p className={styles.errorParagraph}>{errorMessage}</p>
          </>
        )}
      </div>
    </form>
  );
};

export default LoginForm;

// src/components/Header.tsx
"use client";

import { useUser } from "../context/UserContext";
import { useRouter } from "next/navigation";
import Logo from "./Logo";
import Button from "./Button";
import styles from "./Header.module.css";

export default function Header() {
  const { email } = useUser(); // UserContextからメールアドレスを取得
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/login");
  };

  const handleSignupClick = () => {
    router.push("/signup");
  };

  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.buttons}>
        {email ? ( // emailが存在する場合、メールアドレスを表示
          <span className={styles.userEmail}>{email}</span>
        ) : (
          <>
            <Button text="ログイン" onClick={handleLoginClick} variant="primary" />
            <Button text="会員登録" onClick={handleSignupClick} variant="secondary" />
          </>
        )}
      </div>
    </header>
  );
}

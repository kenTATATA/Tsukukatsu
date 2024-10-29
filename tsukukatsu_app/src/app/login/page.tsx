// src/app/login/page.tsx
"use client";

import { useState } from "react";
import { useUser } from "../context/UserContext";
import Header from "../components/Header";
import styles from "./Login.module.css";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setEmail: saveEmail } = useUser();
  const router = useRouter();

  const handleLogin = () => {
    saveEmail(email);  // メールアドレスを保存
    router.push("/");  // ホームページにリダイレクト
  };

  return (
    <div>
      <Header />
      <div className={styles.loginContainer}>
        <h1 className={styles.heading}>ログイン</h1>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>メールアドレス</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="メールアドレスを入力"
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>パスワード</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="パスワードを入力"
            className={styles.input}
          />
        </div>
        <button className={styles.loginButton} onClick={handleLogin}>
          ログイン
        </button>
      </div>
    </div>
  );
}

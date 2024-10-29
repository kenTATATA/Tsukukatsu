// src/components/Logo.tsx
import Image from "next/image";
// import Link from "next/link";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Image src="/images/logo_sample.png" alt="Site Logo" width={200} height={100}/>
    </div>
  );
}

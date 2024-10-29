// src/components/SiteTitle.tsx
import styles from "./SiteTitle.module.css";

export default function SiteTitle() {
  return (
    <div className={styles.siteTitle}>
      <p className={styles.smallBold}>筑波大生に特化した情報が満載!</p>
      <p>「つくかつ」はつくば就活革命が運営する</p>
      <p>
        <span className={styles.bold}>筑波大生専門</span>の
      </p>
      <p>インターン支援サービスです。</p>
    </div>
  );
}

// src/components/ButtonSection.tsx
"use client";

import Button from "./Button";
import styles from "./ButtonSection.module.css";

type ButtonSectionProps = {
    onShowReviews: () => void;
    onShowJobs: () => void;
};

export default function ButtonSection({ onShowReviews, onShowJobs }: ButtonSectionProps) {
  const handleReviewsClick = () => {
    onShowReviews(); // プロップスとして渡された関数を呼び出す
  };

  const handleJobsClick = () => {
    onShowJobs(); // プロップスとして渡された関数を呼び出す
  };

  return (
    <div className={styles.buttonSection}>
      <Button text="インターン生の口コミ一覧" onClick={handleReviewsClick} variant="secondary" />
      <Button text="企業のインターン求人一覧" onClick={handleJobsClick} variant="primary" />
    </div>
  );
}

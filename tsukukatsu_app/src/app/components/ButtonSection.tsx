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
    // インターン生の口コミ一覧ページへの遷移
    console.log("インターン生の口コミ一覧ページへ遷移");
  };

  const handleJobsClick = () => {
    // 企業のインターン求人一覧ページへの遷移
    console.log("企業のインターン求人一覧ページへ遷移");
  };

  return (
    <div className={styles.buttonSection}>
      <Button text="インターン生の口コミ一覧" onClick={handleReviewsClick} variant="secondary" />
      <Button text="企業のインターン求人一覧" onClick={handleJobsClick} variant="primary" />
    </div>
  );
}

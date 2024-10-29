// src/components/Review.tsx
import React, { useState } from "react";
import Image from "next/image";
import styles from "./Review.module.css";

type ReviewProps = {
  name: string;
  academicField: string;
  year: number;
  entryYear: number;
  companyName: string;
  companyImage: string;
  category: string;
  bodyText: string;
};

export default function Review({
  name,
  academicField,
  year,
  entryYear,
  companyName,
  companyImage,
  category,
  bodyText,
}: ReviewProps) {
  // 表示状態を管理するための state
  const [isExpanded, setIsExpanded] = useState(false);

  // ボタンのクリックで表示状態を切り替える関数
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // 表示する口コミの内容（短縮表示または全文表示）
  const displayedText = isExpanded ? bodyText : `${bodyText.slice(0, 50)}...`;

  return (
    <div className={styles.review}>
      <div className={styles.imageContainer}>
        <Image src={companyImage} alt={`${companyName} logo`} width={400} height={200} className={styles.companyImage} />
      </div>
      
      <div className={styles.content}>
        <div className={styles.reviewerInfo}>
          <div className={styles.userIcon}></div>
          <div className={styles.userDetails}>
            <span className={styles.reviewerName}>{name}さん</span>
            <p className={styles.academicInfo}>{academicField}/{year}年 ({entryYear}年入社)</p>
          </div>
          <div className={styles.companyInfo}>
            <h3 className={styles.companyName}>{companyName}</h3>
            <button className={styles.companyButton}>会社のページへ</button>
          </div>
        </div>

        <div className={styles.reviewContent}>
          <h4 className={styles.category}>{category}</h4>
          <p className={styles.bodyText}>{displayedText}</p>
          <button onClick={toggleExpand} className={styles.moreButton}>
            {isExpanded ? "閉じる ▲" : "続きを見る ▼"}
          </button>
        </div>
      </div>
    </div>
  );
}

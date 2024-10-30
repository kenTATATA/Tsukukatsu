import React, { useState } from "react";
import Image from "next/image";
import styles from "./Review.module.css";
import { useRouter } from "next/navigation";

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
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleExpand = () => {
		setIsExpanded(!isExpanded);
	};

	const displayedText = isExpanded ? bodyText : `${bodyText.slice(0, 50)}...`;

	const router = useRouter();
	const handleSignupClick = () => {
		router.push("/review");
	};

	return (
		<div className={styles.review}>
			<div className={styles.imageContainer}>
				<Image
					src={companyImage}
					alt={`${companyName} logo`}
					width={400}
					height={200}
					className={styles.companyImage}
				/>
			</div>

			<div className={styles.content}>
				<div className={styles.reviewerInfo}>
					<div className={styles.userIcon}></div>
					<div className={styles.userDetails}>
						<span className={styles.reviewerName}>{name}さん</span>
						<p className={styles.academicInfo}>
							{academicField}/{year}年 ({entryYear}年入社)
						</p>
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

					{/* 「口コミ詳細へ」ボタン: isExpanded が true のときのみ表示 */}
					{isExpanded && (
						<button
							onClick={handleSignupClick}
							className={styles.moreButton}
							style={{ float: "right" }}
						>
							口コミ詳細へ
						</button>
					)}
				</div>
			</div>
		</div>
	);
}

// src/app/signup/page.tsx
"use client";

import { useState } from "react";
// import { useUser } from "../context/UserContext";
import Header from "../components/Header";
import styles from "./Signup.module.css";

export default function SignupPage() {
	const currentYear = new Date().getFullYear(); // 現在の年度を取得
	const graduationYearOptions = Array.from(
		{ length: 6 },
		(_, i) => currentYear + i
	); // 今年から6年後までの年度を生成

	const [formData, setFormData] = useState({
		nameKanji: "",
		nameKana: "",
		gender: "",
		grade: "", // 学年
		researchGroup: "", // 学群 / 研究群
		program: "",
		graduationYear: "",
		graduationMonth: "",
	});

	// 入力必須チェック用関数
	const isFormValid = () => {
		return (
			formData.nameKanji &&
			formData.nameKana &&
			formData.gender &&
			formData.researchGroup &&
			formData.program &&
			formData.grade &&
			formData.graduationYear &&
			formData.graduationMonth
		);
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("登録情報:", formData);
		// 会員登録処理
	};

	return (
		<div>
			<Header />
			<div className={styles.signupContainer}>
				<h1 className={styles.heading}>会員登録</h1>
				<form onSubmit={handleSubmit} className={styles.form}>
					{/* 姓名（漢字） */}
					<div className={styles.inputGroup}>
						<label className={styles.label}>姓名（漢字）</label>
						<input
							type="text"
							name="nameKanji"
							value={formData.nameKanji}
							onChange={handleChange}
							required
							placeholder="山田 太郎"
							className={styles.input}
						/>
					</div>

					{/* 姓名（カタカナ） */}
					<div className={styles.inputGroup}>
						<label className={styles.label}>姓名（カタカナ）</label>
						<input
							type="text"
							name="nameKana"
							value={formData.nameKana}
							onChange={handleChange}
							required
							placeholder="ヤマダ タロウ"
							className={styles.input}
						/>
					</div>

					{/* 性別 */}
					<div className={styles.inputGroup}>
						<label className={styles.label}>性別</label>
						<select
							name="gender"
							value={formData.gender}
							onChange={handleChange}
							required
							className={styles.select}
						>
							<option value="" disabled>
								選択してください
							</option>
							<option value="男">男</option>
							<option value="女">女</option>
							<option value="その他">その他</option>
						</select>
					</div>

					{/* 大学 */}
					{/* <div className={styles.inputGroup}>
            <label className={styles.label}>大学</label>
            <input
              type="text"
              name="university"
              value={formData.university}
              onChange={handleChange}
              required
              placeholder="○○大学"
              className={styles.input}
            />
          </div> */}

					{/* 学年 */}
					<div className={styles.inputGroup}>
						<label className={styles.label}>学年</label>
						<select
							name="grade"
							value={formData.grade}
							onChange={handleChange}
							required
							className={styles.select}
						>
							<option value="" disabled>
								選択してください
							</option>
							<option value="B1">学部1年 / B1</option>
							<option value="B2">学部2年 / B2</option>
							<option value="B3">学部3年 / B3</option>
							<option value="B4">学部4年 / B4</option>
							<option value="M1">修士1年 / M1</option>
							<option value="M2">修士2年 / M2</option>
							<option value="D1">博士1年 / D1</option>
							<option value="D2">博士2年 / D2</option>
							<option value="D3">博士3年 / D3</option>
							<option value="研究生">研究生</option>
						</select>
					</div>

					{/* 学群 / 研究群 */}
					<div className={styles.inputGroup}>
						<label className={styles.label}>学群 / 研究群</label>
						<input
							type="text"
							name="researchGroup"
							value={formData.researchGroup}
							onChange={handleChange}
							required
							placeholder="入力してください"
							className={styles.input}
						/>
					</div>

					{/* 学類 / 学位プログラム */}
					<div className={styles.inputGroup}>
						<label className={styles.label}>学類 / 学位プログラム</label>
						<input
							type="text"
							name="program"
							value={formData.program}
							onChange={handleChange}
							required
							placeholder="入力してください"
							className={styles.input}
						/>
					</div>

					{/* 卒業予定年度 */}
					<div className={styles.inputGroup}>
						<label className={styles.label}>卒業予定年度</label>
						<select
							name="graduationYear"
							value={formData.graduationYear}
							onChange={handleChange}
							required
							className={styles.select}
						>
							<option value="" disabled>
								選択してください
							</option>
							{graduationYearOptions.map((year) => (
								<option key={year} value={year}>
									{year}年度
								</option>
							))}
						</select>
					</div>

					{/* 卒業予定月 */}
					<div className={styles.inputGroup}>
						<label className={styles.label}>卒業予定月</label>
						<select
							name="graduationMonth"
							value={formData.graduationMonth}
							onChange={handleChange}
							required
							className={styles.select}
						>
							<option value="" disabled>
								選択してください
							</option>
							{[...Array(12)].map((_, i) => (
								<option key={i + 1} value={i + 1}>
									{i + 1}月
								</option>
							))}
						</select>
					</div>

					<button
						type="submit"
						className={styles.button}
						disabled={!isFormValid()}
					>
						登録する
					</button>
				</form>
			</div>
		</div>
	);
}

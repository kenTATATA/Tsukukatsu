// src/app/signup/page.tsx
"use client";

import Header from "../components/Header";
import Review from "../components/Review";

export default function SignupPage() {
	const review = {
		id: 1,
		name: "T",
		academicField: "情報学類",
		year: 3,
		entryYear: 2023,
		companyName: "株式会社VeRcEl",
		companyImage: "/images/company_1.png",
		category: "ワークライフバランス",
		bodyText: `このインターン先では、ワークライフバランスが良く、非常に働きやすい環境でした。上司や先輩社員のサポートも手厚く、分からないことがあれば気軽に質問できる雰囲気がありました。特に、業務の進め方や目標の設定についても細かく指導していただき、自分が成長できる実感がありました。
              また、勤務時間の調整が柔軟で、定時退社が基本となっており、残業もほとんどありませんでした。休暇の取得にも理解があり、事前に申請すればスムーズに休みが取れるため、プライベートとの両立がしやすかったです。チーム内でのコミュニケーションも活発で、週に一度のミーティングでは、進捗や課題について共有し合い、互いにサポートし合う姿勢が感じられました。
              さらに、インターン生同士の交流も大切にされており、社内イベントやランチ会が定期的に開催されていました。これにより、他のインターン生や社員の方々と親睦を深める機会が多くありました。こうしたイベントを通じて、社内の他部署の業務について知ることができ、自分の視野が広がったと感じています。
              業務内容もインターンとしての負担が大きすぎることなく、自分のスキルや成長に合わせた内容であったため、無理なく取り組むことができました。プロジェクトの進行においても、自分の意見が反映される場面が多く、主体的に働ける環境が整っていたと思います。`,
	};

	return (
		<>
			<Header />
			<Review
				key={review.id}
				name={review.name}
				academicField={review.academicField}
				year={review.year}
				entryYear={review.entryYear}
				companyName={review.companyName}
				companyImage={review.companyImage}
				category={review.category}
				bodyText={review.bodyText}
			/>
		</>
	);
}

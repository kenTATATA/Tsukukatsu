// src/components/ReviewList.tsx
export default function ReviewList() {
    const reviews = [
      { id: 1, content: "このインターンはとても勉強になりました！" },
      { id: 2, content: "サポートが手厚く、安心して働けました。" },
      { id: 3, content: "実務経験が積めて、良い機会になりました。" },
    ];
  
    return (
      <div style={{ padding: "1rem", backgroundColor: "#f9f9f9" }}>
        <h2>インターン生の口コミ一覧</h2>
        <ul>
          {reviews.map((review) => (
            <li key={review.id} style={{ marginBottom: "0.5rem" }}>
              {review.content}
            </li>
          ))}
        </ul>
      </div>
    );
}
  
// src/components/JobList.tsx
export default function JobList() {
    const jobs = [
      { id: 1, title: "Web開発インターン", company: "株式会社ABC" },
      { id: 2, title: "データ分析インターン", company: "XYZ株式会社" },
      { id: 3, title: "マーケティングインターン", company: "株式会社123" },
    ];
  
    return (
      <div style={{ padding: "1rem", backgroundColor: "#f0f0f0" }}>
        <h2>企業のインターン求人一覧</h2>
        <ul>
          {jobs.map((job) => (
            <li key={job.id} style={{ marginBottom: "0.5rem" }}>
              {job.title} - {job.company}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
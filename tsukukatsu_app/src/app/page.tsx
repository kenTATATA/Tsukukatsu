// src/pages/page.tsx
"use client";

import { useState } from "react";
import Header from "./components/Header";
import SiteTitle from "./components/SiteTitle";
import ButtonSection from "./components/ButtonSection";
import ReviewList from "./components/ReviewList";
import JobList from "./components/JobList";

export default function Home() {
  const [showReviews, setShowReviews] = useState(true);
  const [showJobs, setShowJobs] = useState(false);

  const handleShowReviews = () => {
    setShowReviews(true);
    setShowJobs(false);
  };

  const handleShowJobs = () => {
    setShowJobs(true);
    setShowReviews(false);
  };

  return (
    <div>
      {/* ヘッダーを表示 */}
      <Header />
      {/* タイトルを表示 */}
      <SiteTitle />
      {/* 一覧ボタンを表示 */}
      <ButtonSection onShowReviews={handleShowReviews} onShowJobs={handleShowJobs} />

      {showReviews && <ReviewList />}
      {showJobs && <JobList />}
    </div>
  );
}


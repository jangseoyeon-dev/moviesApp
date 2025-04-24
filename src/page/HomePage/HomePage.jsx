import React from "react";
import Banner from "./components/Banner/Banner";
import PopularMovieSlice from "./components/PopularMovieSlice/PopularMovieSlice";
import UpComingMovieSlice from "./components/UpComingMovieSlice/UpComingMovieSlice";
import Category from "./components/Category/Category";

// 홈페이지에는 배너, 인기슬라이드, 최근슬라이드가 존재한다.
// 변경내용: 현재 각 컴포넌트별 로딩페이지가 존재합니다.

const HomePage = () => {
  return (
    <div>
      <Banner />
      <div className="p-10">
        <Category />
        <PopularMovieSlice />
        <UpComingMovieSlice />
      </div>
    </div>
  );
};

export default HomePage;

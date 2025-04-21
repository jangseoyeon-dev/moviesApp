import React from "react";
import Banner from "./components/Banner/Banner";
import PopularMovieSlice from "./components/PopularMovieSlice/PopularMovieSlice";
import UpComingMovieSlice from "./components/UpComingMovieSlice/UpComingMovieSlice";

const MoviesPage = () => {
  return (
    <div>
      <Banner />
      <div className="p-10">
        <PopularMovieSlice />
        <UpComingMovieSlice />
      </div>
    </div>
  );
};

export default MoviesPage;

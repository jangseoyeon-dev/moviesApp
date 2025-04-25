import React, { useState } from "react";
import { useSarchMoviesQuery } from "../../hooks/useSearchMovies";
import { useSearchParams } from "react-router";
import { Alert } from "react-bootstrap";
import styles from "./MoviesPage.module.css";
import MovieCard from "../../common/MovieCard/MovieCard";
import Pagenation from "../../common/PageNation/PageNation";
import Loding from "../../common/Loding";
import Category from "./components/Category/Category";

const MoviesPage = () => {
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const keyWord = searchParams.get("q");
  const { data, isLoading, isError, error } = useSarchMoviesQuery({
    keyWord,
    page,
  });
  if (isLoading) {
    return <Loding />;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  return (
    <>
      {data.results.length > 0 ? (
        <div className={styles.container}>
          <Category />
          <div className={styles.cardBox}>
            {data?.results.map((item) => (
              <MovieCard key={item.id} movie={item} />
            ))}
          </div>
          <div className={styles.pagenationBox}>
            <Pagenation
              pageCount={data.total_pages ? Math.min(data.total_pages, 500) : 1}
              page={page}
              onPageChange={handlePageClick}
            />
          </div>
        </div>
      ) : (
        <div className={styles.emptyBox}>
          <p className={styles.empty}>"{keyWord}"검색 결과</p>
          <p className={styles.empty}>데이터가 존재하지 않습니다.</p>
        </div>
      )}
    </>
  );
};

export default MoviesPage;

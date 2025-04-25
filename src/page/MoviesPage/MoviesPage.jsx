import React, { useState } from "react";
import { useSarchMoviesQuery } from "../../hooks/useSearchMovies";
import { useSearchParams } from "react-router";
import { Alert } from "react-bootstrap";
import styles from "./MoviesPage.module.css";
import MovieCard from "../../common/MovieCard/MovieCard";
import Pagenation from "../../common/PageNation/PageNation";
import Loding from "../../common/Loding/Loding";
import Category from "./components/Category/Category";

const DEFAULT_QUERY = {
  page: 1,
  gerneId: "",
  sort: "popularity.desc",
};

const MoviesPage = () => {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(DEFAULT_QUERY);
  const keyWord = searchParams.get("q");
  const { data, isLoading, isError, error } = useSarchMoviesQuery({
    keyWord,
    ...query,
  });
  let result = data?.results || [];
  if (isLoading) {
    return <Loding />;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  const handlePageClick = ({ selected }) => {
    setQuery({ ...query, page: selected + 1 });
  };

  if (keyWord) {
    result = result
      .filter((item) => {
        if (query.gerneId) {
          return (
            Array.isArray(item.genre_ids) &&
            item.genre_ids.includes(Number(query.gerneId))
          );
        }
        return true;
      })
      .sort((a, b) => {
        if (query.sort && query.sort.includes("asc")) {
          return a.popularity - b.popularity;
        } else if (query.sort && query.sort.includes("desc")) {
          return b.popularity - a.popularity;
        }
        return 0;
      });
  }

  return (
    <>
      <div className={styles.container}>
        <Category gerneId={query.gerneId} setQuery={setQuery} />
        {result.length !== 0 ? (
          <>
            <div className={styles.cardBox}>
              {result.map((item) => (
                <MovieCard key={item.id} movie={item} />
              ))}
            </div>
            <div className={styles.pagenationBox}>
              <Pagenation
                pageCount={
                  data.total_pages ? Math.min(data.total_pages, 500) : 1
                }
                page={query.page}
                onPageChange={handlePageClick}
              />
            </div>
          </>
        ) : (
          <div className={styles.emptyBox}>
            <p className={styles.empty}>"{keyWord}"검색 결과</p>
            <p className={styles.empty}>데이터가 존재하지 않습니다.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default MoviesPage;

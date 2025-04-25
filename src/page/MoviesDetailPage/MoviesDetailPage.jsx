import React, { Suspense, useState } from "react";
import { useParams } from "react-router";
import { useDetailMovieQuery } from "../../hooks/useDetailMovie";
import Loding from "../../common/Loding/Loding";
import Alert from "react-bootstrap/Alert";
import styles from "./MoviesDetailPage.module.css";

import YouTube from "react-youtube";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ReviewContainer from "./components/ReviewContainer/ReviewContainer";
import RecommendContainer from "./components/RecommendContainer/RecommendContainer";

const MoviesDetailPage = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const { id } = useParams();
  const { data, isError, error } = useDetailMovieQuery(id);

  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <Suspense fallback={<Loding />}>
      <div className={styles.container}>
        {/* 이미지와 정보 */}
        <div className={styles.infoBox}>
          <div className={styles.imgBox}>
            <YouTube
              className={styles.video}
              videoId={data.video.results[1].key}
              opts={{
                width: "100%",
                height: "600px",
                playerVars: {
                  autoplay: 1,
                  mute: 1,
                  rel: 0,
                  modestbranding: 1,
                },
              }}
              onEnd={(e) => {
                e.target.stopVideo(0);
              }}
            />
          </div>
          <div>
            <h2 className={styles.title}>{data.detail.title}</h2>
            <p className={styles.vote}>평점 : ⭐ {data.detail.vote_average}</p>
            <p className={styles.releaseDate}>
              Release Date: {data.detail.release_date}
            </p>
            <p className={styles.runtime}>
              Runtime: {data.detail.runtime} mins
            </p>
            <p className={styles.revenue}>
              Revenue: ${data.detail.revenue.toLocaleString()}
            </p>
            <hr />
            <p>줄거리</p>
            <p className={styles.overview}>{data.detail.overview}</p>
            <hr />
            <p>추가 정보</p>
            <p className={styles.language}>
              Language: {data.detail.original_language}
            </p>
          </div>
        </div>

        {/* 탭을 이용해 영화 리뷰, 추천 콘텐츠 */}
        <Tabs>
          <TabList className={styles.tabBox}>
            <Tab
              className={
                tabIndex == 0 ? `${styles.tabs} ${styles.active}` : styles.tabs
              }
              onClick={() => setTabIndex(0)}
            >
              리뷰
            </Tab>
            <Tab
              className={
                tabIndex == 1 ? `${styles.tabs} ${styles.active}` : styles.tabs
              }
              onClick={() => setTabIndex(1)}
            >
              추천 콘텐츠
            </Tab>
          </TabList>
          <TabPanel>
            <ReviewContainer movieId={id} />
          </TabPanel>
          <TabPanel>
            <RecommendContainer movieId={id} />
          </TabPanel>
        </Tabs>
      </div>
    </Suspense>
  );
};

export default MoviesDetailPage;

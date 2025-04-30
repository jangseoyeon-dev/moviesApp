# 🎬 MoviesApp

TMDB API를 활용하여 제작한 **영화 정보 웹 애플리케이션**입니다.  
최신 영화 목록부터 상세 정보 조회, 검색 기능까지 제공하며,  
**반응형 UI**로 다양한 디바이스에서 최적화된 사용자 경험을 제공합니다.

👉 https://movies-app-seven-tawny.vercel.app

## 🌟 주요 기능

- 🎥 **카테고리별 영화 목록**: Now Playing, Popular, Top Rated, Upcoming
- 🔍 **검색 기능**: 키워드 기반 영화 검색
- 📄 **상세 정보**: 줄거리, 장르, 평점, 개봉일 등 상세 정보 페이지 제공
- 📱 **반응형 웹**: 모바일, 태블릿, 데스크탑 화면에 최적화된 레이아웃

## 🛠 기술 스택

- **React**: 컴포넌트 기반 UI 개발
- **React Router DOM**: 페이지 라우팅
- **Styled-components**: 컴포넌트 단위 스타일 관리
- **Axios**: TMDB API와 통신
- **TMDB API**: 영화 데이터 제공 (https://www.themoviedb.org/)
- **React Responsive**: 반응형 미디어 쿼리 처리

## 📂 폴더 구조

```
moviesApp/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── MovieCard.jsx
│   │   └── ...
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── MovieDetail.jsx
│   │   └── Search.jsx
│   ├── App.jsx
│   └── main.jsx
├── .env
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 시작 방법

```bash
# 1. 저장소 클론
git clone https://github.com/jangseoyeon-dev/moviesApp.git

# 2. 디렉토리 이동
cd moviesApp

# 3. 패키지 설치
npm install

# 4. 개발 서버 실행
npm start
```

## 🔑 TMDB API Key 설정

1. TMDB 사이트에서 API Key 발급 → https://www.themoviedb.org/
2. 프로젝트 루트에 `.env` 파일 생성 후 아래처럼 입력

```
REACT_APP_TMDB_API_KEY=당신의_API_키
```

## 📱 반응형 UI

| 데스크탑 | 모바일 |
|----------|--------|
| ✅ 넓은 화면에서 영화 슬라이드, 상세 정보 제공 | ✅ 세로형 레이아웃으로 보기 편한 구성 |

## 📝 클론코딩 참고

본 프로젝트는 클론코딩을 통해 학습 목적으로 개발되었습니다.  
디자인은 TMDB와 다양한 영화 웹사이트의 UI를 참고하였습니다.

---

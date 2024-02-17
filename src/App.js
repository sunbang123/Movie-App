import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  // const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
      // `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json`
    ).then((response) => response.json())
    .then((json) => console.log(json));
  }, [])
  return <div>{loading ? <h1>Loading...</h1> : null}</div>;
}

export default App;

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/abot-us">
          <h1>Hello</h1>
        </Route>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
 
export default App;


// import { useEffect, useState } from "react";

// function App() {
//   return null;
// }
 
// export default App;


// import { useEffect, useState } from "react";

// function App() {
//   const [loading, setLoading] = useState(true);
//   const [movies, setMovies] = useState([]);
//   console.log(movies);
//   const getMovies = async () => {
//     const json = await (
//       await fetch(
//           `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
//         )
//     ).json();
//       setMovies(json.data.movies);
//       setLoading(false);
//   };
//   useEffect(() => {
//     getMovies();
//   }, []);
//   return (
//     <div>
//       {loading ? (
//         <h1>Loading...</h1>
//       ) : (
//         <div>
//           {movies.map((movie) => (
//             <div key = {movie.id}>
//               <img src={movie.medium_cover_image} />
//               <h2>{movie.title}</h2>
//               <p>{movie.summary}</p>
//               <ul>
//                 {movie.genres.map((g) => (
//                   <li key={g}>{g}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }

// export default App;

// import { useEffect, useState } from "react";

// function App() {
//   const [loading, setLoading] = useState(true);
//   const [movies, setMovies] = useState([]);
//   useEffect(() => {
//     fetch(
//       `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
//     )
//     .then((response) => response.json())
//     .then((json) => {
//       setMovies(json.data.movies)
//     });
//   }, []);
//   console.log(movies);
//   return <div>{loading ? <h1>Loading...</h1> : null}</div>;
// }

// export default App;

import { LandingPage } from "./LandingPage";
import { MovieDetails } from "./MovieDetails";
import styles from "./App.module.css";
import {
  Routes /*En React-router-dom V6 es Routes en vez de Switch */,
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";

export function App() {
  return (
    <Router>
      <header>
        {/*cuando click en "cuerpo del link" pon en el browser  TO = "/direccion" */}
        <Link to="/carteleraTMDB/">
          <h1 className={styles.title}> Movies </h1>
        </Link>
      </header>

      <main>
        <Routes>
          {/*CAPTURA la direccion en el browser,si coincide con PATH entonces renderiza ELEMENT */}
          <Route
            exact
            path="/carteleraTMDB/movies/:movieId"
            element={<MovieDetails />}
          />
          ;
          {/*NOTA: cdo clic en la card no se rendirazaba el contenido de MovieDetails
      ERROr: tenia como camino de la linea 27 de App.jsx 
             "/movie/:movieId" en vez de "/movies/:movieId" 
             y debe concidir con el camino de la linea 10 de MovieCard.jsx
            <Link to={"/movies/" + movieProp.id}> */}
          <Route path="/carteleraTMDB/" element={<LandingPage />} />;
        </Routes>
      </main>
    </Router>
  );
}

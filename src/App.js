import "swiper/scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./layout/Main";
import HomePage from "./pages/HomePage";
import Banner from "./components/banner/Banner";
import MoviePage from "./pages/MoviePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Main />}>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <HomePage />
              </>
            }
          />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/movie/:movieId" element={<MovieDetailsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

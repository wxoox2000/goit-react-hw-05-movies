import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./header/SharedLayout";
import { GlobalStyles } from "./GStyles";
const Home = lazy(() =>import("./Home/home"))
const MovieSearch = lazy(() =>import("./MovieSearch/MovieSearch"))
const MovieDetails = lazy(() =>import("./MovieDetails/MovieDetails"))
const Cast = lazy(() =>import("./Cast/Cast"))
const Reviews = lazy(() =>import("./Reviews/Reviews"))

export const App = () => {

  return (
<div>
  <Routes>
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home />}/>
      <Route path="movie" element={<MovieSearch />}/>
      <Route path="movie/:id" element={<MovieDetails />}>
        <Route path="cast" element={<Cast />}/>
        <Route path="reviews" element={<Reviews />}/>
      </Route>
    </Route>
  </Routes>
  <GlobalStyles />
</div>  );
};

import { MoviesGrid } from "../moviesGrid/MoviesGrid";
import { Search } from "../../helpers/Search";

export function LandingPage() {
  return (
    <div>
      <Search />
      <MoviesGrid />
    </div>
  );
}

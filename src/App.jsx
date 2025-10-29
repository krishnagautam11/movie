// import { Button } from "@/components/ui/button"
import './styles/base.css'
import './styles/style.css'
import {Header2} from "./components/Header2"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Favorites from "./pages/Favorites";
import SearchResults from "./pages/SearchResults";


function App() {
  return (
    <BrowserRouter>
      <Header2 />
      <main className="p-4 custom-container mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/search/:query" element={<SearchResults />} />
        </Routes>
      </main>
    </BrowserRouter>

  )
}

export default App
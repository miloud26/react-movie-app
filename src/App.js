import React from "react";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Error from "./pages/error/Error";
import About from "./pages/about/About";
import Support from "./pages/support/Support";
import Movies from "./pages/movies/Movies";
import SingleMovie from "./pages/singleMovie/SingleMovie";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<SingleMovie />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

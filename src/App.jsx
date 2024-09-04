import MainNavbar from "./components/navbars/MainNavbar";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Blog from "./pages/Blog";
import Dine from "./pages/Dine";
import Relax from "./pages/Relax";
import Stay from "./pages/Stay";
import GardenVilla from "./pages/GardenVilla";
import ForestVilla from "./pages/ForestVilla";
import PoolVilla from "./pages/PoolVilla";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/navbars/Footer";

const App = () => {
  return (
    <main>
      <Router>
        <MainNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stay" element={<Stay />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/dine" element={<Dine />} />
          <Route path="/relax" element={<Relax />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/poolvilla" element={<PoolVilla />} />
          <Route path="/gardenvilla" element={<GardenVilla />} />
          <Route path="/forestvilla" element={<ForestVilla />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
};

export default App;

//https://www.peninsula.com/en/default
//https://bonhotels.com/

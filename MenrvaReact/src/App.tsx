import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import CustomNavbar from "./components/Navbar/CustomNavbar";
import HomeView from "./views/HomeView";

const App = () => {
  return (
    <Router>
      <div className="flex h-full w-screen flex-col items-center justify-center">
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<HomeView />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

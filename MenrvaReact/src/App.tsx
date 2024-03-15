import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import CustomNavbar from "./components/Navbar/CustomNavbar";
import HomeView from "./views/HomeView";
import { BookStateProvider } from "./store/book/contexts/BookContext";

const App = () => {
  return (
    <BookStateProvider>
    <Router>
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-[#fff3e0] font-[#673C4F]">
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<HomeView />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </BookStateProvider>
  );
};

export default App;

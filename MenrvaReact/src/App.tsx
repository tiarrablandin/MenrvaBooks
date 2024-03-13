import BookSlider from "./components/CardSlider/BookSlider/BookSlider";
import { Footer } from "./components/Footer/Footer";
import CustomNavbar from "./components/Navbar/CustomNavbar";
import { fetchTest } from "./services/apiService";

const App = () => {
  // const [count, setCount] = useState(0);

  fetchTest();

  return (
    <div className="flex flex-col justify-center items-center w-screen h-full">
      <CustomNavbar />
      <BookSlider />
      <Footer />
    </div>
  );
};

export default App;

import Homepage from "./components/Homepage";
import ShopPage from "./components/ShopPage";
import Collage from "./components/Collage";
import Socials from "./components/Socials";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <ShopPage />
      <Collage />
      <Socials />
      <Footer />
    </div>
  );
}

export default App;

import Homepage from "./components/Homepage";
import ShopPage from "./components/ShopPage";
import Collage from "./components/Collage";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Homepage />
        <ShopPage />
        <Collage />
    </div>
  );
}

export default App;

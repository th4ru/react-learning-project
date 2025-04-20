import './css/App.css';
import Favourites from './pages/favourites';
import Home from './pages/Home'
import {Routes, Route} from "react-router-dom"
import NavBar from "./Components/NavBar";

function App() {
 
  return (
    <div>
      <NavBar />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </main>
    </div>
  );
}



export default App;

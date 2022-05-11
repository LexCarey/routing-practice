import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Determine from "./components/Determine";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:key" element={<Determine  />} />
        <Route path="/:key/:color/:background" element={<Determine  />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

import "./App.css";
import Navbar from "../src/Components/Navbar";
import Main from "./Components/Main";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Search from "./Components/Search";
function App() {
  

  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="webcam" element={<Search/>} />
    </Routes>
  </BrowserRouter>
  
  </div> 
     
  );
}

export default App;
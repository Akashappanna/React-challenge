import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Video from "./pages/Video";
import Date from "./pages/Date";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="video" element={<Video />} />
        <Route path="date" element={<Date />} />
      </Routes>
    </div>
  );
}

export default App;

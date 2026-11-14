import "./App.css";
import Header from "./components/Header.jsx";
import Homepage from "./components/Homepage.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Videopage from "./components/Videopage.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      {/* Top Navbar */}
      <Header />

      <div className="app-body">
        <Routes>

          {/* Homepage (Sidebar + Videos) */}
          <Route 
            path="/" 
            element={
              <div className="home-layout">
                <Sidebar />
                <Homepage />
              </div>
            } 
          />

          {/* Video Page (No Sidebar) */}
          <Route 
            path="/video/:id" 
            element={<Videopage />} 
          />

        </Routes>
      </div>
    </div>
  );
}

export default App;

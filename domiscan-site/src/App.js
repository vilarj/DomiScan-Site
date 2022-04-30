
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './Pages/About'
import Contact from './Pages/Contact'
import Download from './Pages/Download'
import Home from './Pages/Home'
import NoPage from './Pages/NoPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/domiscan-site/home/" element={<Home />} />
          <Route path="/domiscan-site/about" element={<About />} />
          <Route path="/domiscan-site/contact" element={<Contact />} />
          <Route path="/domiscan-site/download" element={<Download />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

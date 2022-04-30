
import './App.css';
import Title from './Components/Title'
import Body from './Components/Body'
import Footer from './Components/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Title />
      <Body />
      <Footer />
    </div>
  );
}

export default App;

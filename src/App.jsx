import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './404/NotFound.jsx';
import Home from "./Home/Home.jsx";
import FormularioRegistro from "./components/FormularioRegistro.jsx";
import Login from "./components/Login.jsx";

function App() {
  return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/register" element={<FormularioRegistro/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Router>
      </>
  );
}

export default App;

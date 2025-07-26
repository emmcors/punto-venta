import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProductoPage from './pages/ProductoPage';
import VentaPage from './pages/VentaPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductoPage/>}/>
        <Route path="/agregar" element={<VentaPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;

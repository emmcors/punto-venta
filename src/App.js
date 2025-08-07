import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProductoPage from './pages/ProductoPage';
import VentaPage from './pages/VentaPage';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      <Router>
        <Routes>
          <Route path="/" element={<ProductoPage/>}/>
          <Route path="/agregar" element={<VentaPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

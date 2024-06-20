import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import './components/styles/index.css';
import Index from './components/views/Index';
import Menu from './components/views/Menu';
// Independientes
import Login_In from './components/views/Independiente/Login_In';

// CRUD
import Ver from './components/views/Independiente/Ver';
import Editar from './components/views/Independiente/Editar';
import Crear from './components/views/Independiente/Crear';
import Eliminar from './components/views/Independiente/Eliminar';

// Dependientes
// import Login_In_Dependiente from './components/views/Dependiente/Login_In';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/menu' element={<Menu />} />
        {/* Independientes */}
        <Route path='/independiente/login' element={<Login_In />} />
        {/* Dependientes */}
        {/* <Route path='/dependiente/login' element={<Login_In_Dependiente />} /> */}
        {/* CRUD */}
        <Route path='/ver' element={<Ver />} />
        <Route path='/editar/:id' element={<Editar />} />
        <Route path='/eliminar/:id' element={<Eliminar />} />
        <Route path='/crear' element={<Crear />} />
      </Routes>
    </Router>
  );
}

export default App;

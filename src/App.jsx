import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import './components/styles/index.css';
import Index from './components/views/Index';
import Menu from './components/views/Menu';
// Independientes
import Login_In from './components/views/Independiente/Login_In';
import Datos from './components/views/Independiente/Datos';

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
        <Route path='/datos' element={<Datos />} />
        {/* Dependientes */}
        {/* <Route path='/dependiente/login' element={<Login_In_Dependiente />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

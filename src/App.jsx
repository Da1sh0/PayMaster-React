import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './components/styles/index.css';
import Index from './components/views/Index';
import Menu from './components/views/Menu';
// Independientes
import Login from './components/views/Independiente/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/menu" element={<Menu />} />
        {/* Independientes */}
        <Route path="/indepentiende/login" element={<Login />} />
        {/* Dependientes */}
      </Routes>
    </Router>
  );
}

export default App;
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cards from './components/Cards';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/game' element={<Cards />} />
      </Routes>
    </Router>
  );
}

export default App;

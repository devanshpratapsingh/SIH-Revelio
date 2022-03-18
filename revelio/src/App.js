import logo from './logo.svg';
import './App.css';
import CardCom from './components/cards/cardcomp';
import Cards from './components/DetailsCard/CardComponent';
import Home from './pages/Home';
import Car from './components/DetailsCard/car';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './pages/Search';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;

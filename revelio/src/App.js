import logo from './logo.svg';
import './App.css';
import CardCom from './components/cards/cardcomp';
import Cards from './components/DetailsCard/CardComponent';
import Home from './pages/Home';
import Car from './components/DetailsCard/car';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        {/* <CardCom /> */}
        {/* <Cards /> */}
        <Home />
        {/* <Car />
        <Car /> */}
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import CardCom from './components/cards/cardcomp';
import Cards from './components/DetailsCard/CardComponent';
import Home from './pages/Home';
import Car from './components/DetailsCard/car';
import 'bootstrap/dist/css/bootstrap.min.css';
import MP from './components/cards/mp';
import Kerala from './components/cards/kerala';
import Jharkhand from './components/cards/jh';
import UP from './components/cards/up';
import Delhi from './components/cards/delhi';

function App() {
  return (
    <div className="App">
        {/* <CardCom /> */}
        {/* <Cards /> */}
        <Home />
        {/* <MP />  */}
        {/* <Kerala/> */}
        {/* <Jharkhand/> */}
        {/* <UP/> */}
        {/* <Delhi/> */}
        {/* <Car /> */}
        {/* <Car /> */}
    </div>
  );
}

export default App;

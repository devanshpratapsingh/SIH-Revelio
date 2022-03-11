// import logo from './logo.svg';
import './App.css';
// import CardCom from './components/cards/cardcomp';
import Cards from './components/DetailsCard/CardComponent';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
        {/* <CardCom /> */}
        <Cards />
        <Home />
    </div>
  );
}

export default App;

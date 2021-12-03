import "./App.css";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import countriesDB from  './countries.json'

function App() {
  return <div className="App">
    <Navbar />
    <CountriesList countries={countriesDB} />
    <Route 
      path='/:id' 
      render={(props)=> 
      <CountryDetails {...props} countries={countriesDB} />}
    />
  </div>;
}

//Function ----> Group of parameters ({...props})// single parameters parameterName={dataWePass}
//<CountryDetails {...props} countries={countriesDB}

export default App;
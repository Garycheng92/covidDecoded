import React, { useEffect, useState } from 'react';
import './App.css';
import LineGraph from './components/LineGraph';
import Card from './components/Card';
import CovidSummary from './components/CovidSummary';
import axios from './axios';

function App() {

  const[totalConfirmed, setTotalConfirmed] = useState(0);
  const[totalRecovered, setTotalRecovered] = useState(0);
  const[totalDeaths, setTotalDeaths] = useState(0);
  const[loading, setLoading] = useState(false);
  const[covidSummary, setCovidSummary] = useState({});
  
  //componentDidMount
  useEffect(() => {

    setLoading(true);
    //for total us stats
    axios.get(`/api/us`)
    .then(res => {
      setLoading(false);

      if(res.status === 200){

      setTotalConfirmed(res.data[0].positive);
      setTotalRecovered(res.data[0].recovered);
      setTotalDeaths(res.data[0].death);

      }

      console.log(res);
    })
    .catch(error => {
      console.log(error)
    })

  }, []);

   useEffect(() => {

    setLoading(true);
    //for states state
    axios.get(`api/states`)
    .then(res => {
      setLoading(false);

      if(res.status === 200){
      setCovidSummary(res.data);
    }

      console.log(res);
    })
    .catch(error => {
      console.log(error)
    })

  }, []);

  if(loading){
    return <p>Fetching data from api...!</p>
  }

  return (
    <div className="App">
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
      <CovidSummary
        totalConfirmed={totalConfirmed}
        totalRecovered={totalRecovered}
        totalDeaths={totalDeaths}
        state={''}
      />
      <LineGraph/>
    </div>
  );
}

export default App;

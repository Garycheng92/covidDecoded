import React from 'react';
import './App.css';
import LineGraph from './components/LineGraph';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <div>
        <div>
          <h1>Corona Virus Report</h1>
          <div style=
            {{
              display: 'flex',
              justifyContent: 'center'
            }}>
              <Card>
                <span>Total Confirmed Cases</span><br />
                <span>0</span>
              </Card>

              <Card>
                <span>Total Recovered Cases</span><br />
                <span>0</span>
              </Card>

              <Card>
                <span>Total Death Cases</span><br />
                <span>0</span>
              </Card>
          </div>

         </div> 
      </div>
      <LineGraph/>
    </div>
  );
}

export default App;

import React from 'react';
import Card from './Card';


const CovidSummary = (props) => {

	const {
		totalConfirmed,
        totalRecovered,
        totalDeaths,
        state
	} = props;

	return (
	   <div>
	        <div>
	          <h1>{state === '' ? 'Corona Viruses Reports' : state}</h1>
	           <div class="input-group">
  <input type="text" class="form-control" aria-label="Text input with dropdown button"/>
  <div class="input-group-append">
    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Dropdown</button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div role="separator" class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div>
</div>
	      
	          <div style=
	            {{
	              display: 'flex',
	              justifyContent: 'center'
	            }}>
	              <Card>
	                <span>Total U.S Confirmed Cases</span><br />
	                <span>{totalConfirmed}</span>
	              </Card>

	              <Card>
	                <span>Total U.S. Recovered Cases</span><br />
	                <span>{totalRecovered}</span>
	              </Card>

	              <Card>
	                <span>Total U.S Death Cases</span><br />
	                <span>{totalDeaths}</span>
	              </Card>
	          </div>

	         </div>
	      </div>
	)
}

export default CovidSummary
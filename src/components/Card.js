import React from 'react'


function updateChart(e) {
	e.preventDefault();
	console.log('link clicked')
}

const Card = (props) => {
	return(
		<a href='' onClick={updateChart}>
		<div className="card">
			{props.children}
		</div>
		</a>
	)
}

export default Card
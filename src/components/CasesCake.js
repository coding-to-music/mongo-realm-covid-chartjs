import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

function CasesCake({ countryName, activeCases, population }) {
	const data = {
		labels: ['Verified', 'rest'],
		datasets: [
			{
				label: 'Cases of Covid in',
				data: [activeCases, population - activeCases],
				backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(75,192,192,0.5)'],
				borderColor: ['rgba(255, 99, 132, 1)', 'rgba(75,192,192,1)'],
				borderWidth: 1,
			},
		],
	};
	return (
		<div style={{ heigth: '200px', width: '200px', resoinsive: 'true', color: 'white' }}>
			Active cases of Covid in {countryName}
			<Doughnut data={data} />
		</div>
	);
}

export default CasesCake;

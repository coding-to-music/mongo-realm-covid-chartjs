import React from 'react';

import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

function Graph({ dates, graphData }) {
	const data = {
		labels: [...dates],
		datasets: [
			{
				label: 'Covid Cases last 30 days',
				data: [...graphData],
				fill: true,
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
				borderColor: 'rgba(255, 99, 132, 1)',
			},
		],
	};
	return (
		<Line
			data={data}
			style={{ width: '100%' }}
			options={{
				responsive: true,
				legend: {
					fontColor: 'white',
				},
				scales: {
					y: {
						ticks: {
							color: 'white',
							font: {
								size: 14,
							},
						},
					},
					x: {
						ticks: {
							color: 'white',
							font: {
								size: 14,
							},
						},
					},
				},
			}}
		/>
	);
}
export default Graph;

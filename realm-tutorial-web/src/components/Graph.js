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
			options={{
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
var options = {
	responsive: true,
	maintainAspectRatio: false,
	legend: {
		fontColor: 'white',
	},
	scales: {
		xAxes: [
			{
				ticks: {
					fontColor: 'white',
				},
			},
		],
		yAxes: [
			{
				ticks: {
					fontColor: 'white',
					beginAtZero: true,
					maxTicksLimit: 5,
					stepSize: Math.ceil(250 / 5),
					max: 250,
				},
			},
		],
	},
};

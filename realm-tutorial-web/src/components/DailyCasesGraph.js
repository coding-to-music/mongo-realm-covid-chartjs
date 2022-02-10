import React from 'react';
import ReactDOM from 'react-dom';
import Chart from './components/Chart';

import './styles.css';

class App extends React.Component {
	state = {
		chartData: {},
	};

	componentWillMount() {
		this.getChartData();
	}

	getChartData() {
		this.setState({
			chartData: {
				labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
				datasets: [
					{
						data: [617594, 181045, 153060, 106519, 105162, 95072],
						//backgroundColor:'green',
						backgroundColor: [
							'rgba(255, 99, 132, 0.6)',
							'rgba(54, 162, 235, 0.6)',
							'rgba(255, 206, 86, 0.6)',
							'rgba(75, 192, 192, 0.6)',
							'rgba(153, 102, 255, 0.6)',
							'rgba(255, 159, 64, 0.6)',
							'rgba(255, 99, 132, 0.6)',
						],
					},
				],
			},
		});
	}

	render() {
		return (
			<div className="App">
				<h1>React &amp; Chart.js</h1>
				<Chart chartData={this.state.chartData} displayLegend={false} />
			</div>
		);
	}
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

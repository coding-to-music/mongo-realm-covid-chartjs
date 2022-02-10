import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SocialCard from '../DataCard';
import Graph from '../Graph';
import styled from '@emotion/styled';
import CasesCake from '../CasesCake';
import countryImg from './../../images/countryimg.jpg';
import Loading from './../Loading';

// Hook
import { useCountriesFetch } from '../../hooks/useCountriesFetch';
import { useCountryHistory } from '../../hooks/useCountryHistory';

function Countries() {
	const { countries, countriesError } = useCountriesFetch();
	const { history, historyError, loading } = useCountryHistory();
	const [value, setValue] = useState('');
	const [dates, setDates] = useState('');
	const [graphData, setGraphData] = useState('');
	const [activeCases, setActiveCases] = useState('');
	const [population, setPopulation] = useState('');
	const [totalDeaths, setTotalDeaths] = useState('');
	const [totalCases, setTotalCases] = useState('');
	const [totalRecovered, setTotalRecovered] = useState('');
	const [imgSrc, setImgSrc] = useState('');

	if (countriesError || historyError) return <div>Something went wrong ...</div>;
	return loading ? (
		<Container style={{ display: 'flex', height: '400px', justifyContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
			<Loading />
		</Container>
	) : (
		<div>
			<Container fluid className="mx-auto" style={{ width: '65%' }}>
				<Row className="justify-content-center ">
					<Col md="auto">
						<Select
							className="form-select"
							onChange={(e) => {
								let index = e.target.options[e.target.options.selectedIndex].getAttribute('data-key');
								setValue(countries.results[index].country);
								setActiveCases(countries.results[index].active);
								setPopulation(countries.results[index].population);
								setTotalCases(countries.results[index].cases);
								setTotalDeaths(countries.results[index].deaths);
								setTotalRecovered(countries.results[index].recovered);
								setDates(Object.keys(history.results[index].timeline.cases));
								setGraphData(Object.values(history.results[index].timeline.cases));
								setImgSrc(countries.results[index].countryInfo.flag);
							}}
						>
							{countries.results.map((c, i) => {
								return (
									<option data-key={i} key={i} value={c.country}>
										{c.country}
									</option>
								);
							})}
						</Select>
					</Col>
				</Row>
				<Row className="mt-3 d-flex align-content-center justify-content-center">
					<Col>
						<SocialCard
							headline={value === '' ? countries?.results[0]?.country : value}
							field1={'Total Cases'}
							field2={'Active Cases'}
							field3={'Total Deaths'}
							field4={'Total Recovered'}
							data1={totalCases === '' ? countries?.results[0]?.cases : totalCases}
							data4={activeCases === '' ? countries?.results[0]?.active : activeCases}
							data2={totalDeaths === '' ? countries?.results[0]?.deaths : totalDeaths}
							data3={totalRecovered === '' ? countries?.results[0]?.recovered : totalRecovered}
							imgSrc={imgSrc === '' ? countries?.results[0]?.countryInfo?.flag : imgSrc}
							func="save"
						/>
					</Col>
					<Col>
						<CasesCake
							countryName={value === '' ? countries?.results[0]?.country : value}
							activeCases={activeCases === '' ? countries?.results[0]?.active : activeCases}
							population={population === '' ? countries?.results[0]?.population : population}
						/>
					</Col>
				</Row>
				<Row className="mt-4 d-flex align-content-center justify-content-center">
					{history?.results.length > 0 && (
						<Graph
							dates={dates === '' ? Object.keys(history?.results[0]?.timeline?.cases) : dates}
							graphData={graphData === '' ? Object.values(history?.results[0]?.timeline?.cases) : graphData}
						/>
					)}
				</Row>
			</Container>
		</div>
	);
}
export default Countries;

const Select = styled.select`
	margin: 40px;
	background: rgba(0, 0, 0, 0.3);
	color: #fff;
	text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
`;

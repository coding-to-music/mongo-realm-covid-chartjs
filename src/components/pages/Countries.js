import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SocialCard from '../DataCard';
import Graph from '../Graph';
import styled from '@emotion/styled';
import CasesCake from '../CasesCake';
import Loading from './../Loading';
import './../Container.css';

// Hook
import { useCountriesFetch } from '../../hooks/useCountriesFetch';
import { useCountryHistory } from '../../hooks/useCountryHistory';
import worldImg from './../../images/world.jpg';

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
		<Container style={{ display: 'flex', height: '400px', justifyContent: 'center', alignItems: 'center' }}>
			<Loading />
		</Container>
	) : (
		<div>
			<CoverImg />
			<Container className="mx-auto">
				<Row className="justify-content-center ">
					<Col md="auto" className="d-flex justify-content-center ">
						<Select
							className="form-select"
							onChange={(e) => {
								let index = e.target.options[e.target.options.selectedIndex].getAttribute('data-key');
								let name = e.target.options[e.target.options.selectedIndex].getAttribute('value');
								let countryData = history.results.find((o) => o.country === name);
								setValue(countries.results[index].country);
								setActiveCases(countries.results[index].active);
								setPopulation(countries.results[index].population);
								setTotalCases(countries.results[index].cases);
								setTotalDeaths(countries.results[index].deaths);
								setTotalRecovered(countries.results[index].recovered);
								setDates(Object.keys(countryData.timeline.cases));
								setGraphData(Object.values(countryData.timeline.cases));
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
				<Row className="mt-1 d-flex align-content-center justify-content-center">
					<Col className="d-flex justify-content-center mt-4" sm={6}>
						<SocialCard
							headline={value === '' ? countries?.results[0]?.country : value}
							field1={'Total Cases'}
							field2={'Active Cases'}
							field3={'Total Deaths'}
							field4={'Total Recovered'}
							data1={totalCases === '' ? countries?.results[0]?.cases : totalCases}
							data2={activeCases === '' ? countries?.results[0]?.active : activeCases}
							data3={totalDeaths === '' ? countries?.results[0]?.deaths : totalDeaths}
							data4={totalRecovered === '' ? countries?.results[0]?.recovered : totalRecovered}
							imgSrc={imgSrc === '' ? countries?.results[0]?.countryInfo?.flag : imgSrc}
							func="save"
						/>
					</Col>
					<Col className="d-flex justify-content-center mt-4" sm={6}>
						<CasesCake
							countryName={value === '' ? countries?.results[0]?.country : value}
							activeCases={activeCases === '' ? countries?.results[0]?.active : activeCases}
							population={population === '' ? countries?.results[0]?.population : population}
						/>
					</Col>
				</Row>
				<Row className="mt-4 ">
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
const CoverImg = styled.section`
	background-image: url(${worldImg});
	width: 100%;
	height: 50vh;
	background-size: cover;
	background-repeat: no-repeat;
	position: relative;
`;

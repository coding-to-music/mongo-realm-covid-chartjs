import React, { useState } from 'react';
import { useContinentsFetch } from '../../hooks/useContinentsFetch';
import { Container, Row, Col } from 'react-bootstrap';
import DataCard from '../DataCard';
import CasesCake from '../CasesCake';
import Loading from './../Loading';
import styled from '@emotion/styled';
import worldImg from './../../images/world.jpg';
import './../Container.css';

function Continents() {
	const { continents, continentsError, loading } = useContinentsFetch();
	const [value, setValue] = useState('');
	const [totalDeaths, setTotalDeaths] = useState('');
	const [totalCases, setTotalCases] = useState('');
	const [todayCases, setTodayCases] = useState('');
	const [totalRecovered, setTotalRecovered] = useState('');
	const [activeCases, setActiveCases] = useState('');
	const [population, setPopulation] = useState('');

	if (continentsError) return <div>Something went wrong ...</div>;
	return loading ? (
		<Container style={{ display: 'flex', height: '400px', justifyContent: 'center', alignItems: 'center' }}>
			<Loading />
		</Container>
	) : (
		<>
			<CoverImg />
			<Container className="mx-auto">
				<Row className="justify-content-center ">
					<Col md="auto" className="d-flex justify-content-center ">
						<Select
							className="form-select"
							name="continents"
							aria-label="Default select example"
							onChange={(e) => {
								let index = e.target.options[e.target.options.selectedIndex].getAttribute('data-key');
								setValue(continents.results[index].continent);
								setTodayCases(continents.results[index].todayCases);
								setTotalCases(continents.results[index].cases);
								setTotalDeaths(continents.results[index].deaths);
								setTotalRecovered(continents.results[index].recovered);
								setActiveCases(continents.results[index].recovered);
								setPopulation(continents.results[index].population);
							}}
						>
							{continents.results.map((c, i) => {
								return (
									<option data-key={i} key={i} value={c.continent}>
										{c.continent}
									</option>
								);
							})}
						</Select>
					</Col>
				</Row>
				<Row className="mt-1 justify-content-center ">
					<Col className="d-flex justify-content-center mt-4 " sm={6}>
						<DataCard
							headline={value === '' ? continents?.results[0]?.continent : value}
							field1={'Total Cases'}
							field2={'Today Cases'}
							field3={'Total Deaths'}
							field4={'Total Recovered'}
							data1={totalCases === '' ? continents?.results[0]?.cases : totalCases}
							data4={todayCases === '' ? continents?.results[0]?.todayCases : todayCases}
							data2={totalDeaths === '' ? continents?.results[0]?.deaths : totalDeaths}
							data3={totalRecovered === '' ? continents?.results[0]?.recovered : totalRecovered}
							func="save"
						/>
					</Col>
					<Col className="d-flex justify-content-center mt-4 " sm={6}>
						<CasesCake
							countryName={value === '' ? continents?.results[0]?.continent : value}
							activeCases={activeCases === '' ? continents?.results[0]?.active : activeCases}
							population={population === '' ? continents?.results[0]?.population : population}
						/>
					</Col>
				</Row>
			</Container>
		</>
	);
}
export default Continents;

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

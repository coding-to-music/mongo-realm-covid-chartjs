import React from 'react';
import homeImg from './../../images/homeimg.jpg';
import styled from '@emotion/styled';
import { Container, Row, Col } from 'react-bootstrap';
import SocialCard from '../DataCard';
import { useAllFetch } from '../../hooks/useAllFetch';
function Home() {
	const { all, allError } = useAllFetch();

	if (allError) return <div>Something went wrong ...</div>;
	return (
		<Container fluid className="mx-auto">
			<Row>
				<CoverImg />
			</Row>
			<Row>
				<Col style={{ color: 'white' }}>
					<h1>Covid-Stats</h1>
					<br />
					<p>information about covid-19 stats in countries and continents around the world.</p>
					<p>data are updated every 10 minutes.</p>
				</Col>
				<Col className="mt-3 d-flex align-content-center justify-content-center">
					<SocialCard
						headline={'Over World'}
						field1={'Cases'}
						field2={'Deaths'}
						field3={'Recovered'}
						data1={all.results.cases}
						data2={all.results.deaths}
						data3={all.results.recovered}
						func="save"
					/>
				</Col>
			</Row>
		</Container>
	);
}
export default Home;

const CoverImg = styled.section`
	background-image: url(${homeImg});
	width: 100vw;
	height: 50vh;
	background-size: cover;
	background-repeat: no-repeat;
	position: relative;
`;

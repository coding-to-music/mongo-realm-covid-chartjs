import React from 'react';
import homeImg from './../../images/homeimg.jpg';
import styled from '@emotion/styled';
import { Container, Row, Col } from 'react-bootstrap';
import SocialCard from '../DataCard';
import { useAllFetch } from '../../hooks/useAllFetch';
import ReactPlayer from 'react-player';

function Home() {
	const { all, allError } = useAllFetch();

	if (allError) return <div>Something went wrong ...</div>;
	return (
		<>
			<CoverImg />
			<Container fluid className="mx-auto">
				<Row className="mt-5 d-flex align-content-center justify-content-center" style={{ width: '90%' }}>
					<Col style={{ color: 'white' }} className=" mt-3 " sm={6}>
						<h1>Covid-Stats</h1>
						<br />
						<p>Information about covid-19 stats in continents and countries around the world.</p>
						<p>data are updating every 10 minutes by "NovelCOVID API".</p>
						<p>You can Serach for covid data around the world and saved it.</p>
					</Col>
					<Col className="mt-3 d-flex align-content-center justify-content-center" sm={6}>
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
				<Row className="mt-5 d-flex justify-content-center">
					<Col className="  mt-3 " sm={6}>
						<h3 style={{ color: 'white' }}>The Story of Coronavirus</h3>
						<ReactPlayer width="100%" controls url="www.youtu.be/w5HvxsOo00E" origin="http://localhost:3000" host="https://www.youtube.com" />
					</Col>
					<Col className="mt-3" sm={6}>
						<h3 style={{ color: 'white' }}>Covid</h3>
						<P>
							Coronavirus disease 2019 (COVID-19) is a contagious disease caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). The first known case was
							identified in Wuhan, China, in December 2019. The disease has since spread worldwide, leading to an ongoing pandemic.
						</P>
						<P>
							Symptoms of COVID‑19 are variable, but often include fever, cough, headache, fatigue, breathing difficulties, loss of smell, and loss of taste. Symptoms may
							begin one to fourteen days after exposure to the virus. At least a third of people who are infected do not develop noticeable symptoms. Of those people who
							develop symptoms noticeable enough to be classed as patients, most (81%) develop mild to moderate symptoms (up to mild pneumonia), while 14% develop severe
							symptoms (dyspnea, hypoxia, or more than 50% lung involvement on imaging), and 5% suffer critical symptoms (respiratory failure, shock, or multiorgan
							dysfunction). Older people are at a higher risk of developing severe symptoms. Some people continue to experience a range of effects (long COVID) for months
							after recovery, and damage to organs has been observed. Multi-year studies are underway to further investigate the long-term effects of the disease.
						</P>
					</Col>
				</Row>
			</Container>
		</>
	);
}
export default Home;

const CoverImg = styled.section`
	background-image: url(${homeImg});
	width: 100%;
	height: 50vh;
	background-size: cover;
	background-repeat: no-repeat;
	position: relative;
`;

const P = styled.p`
	color: white;
`;

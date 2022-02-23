import React, { useState } from 'react';
import { useRealmApp } from '../../RealmApp';
import { Container, Row, Col } from 'react-bootstrap';
import useUserData from '../../graphql/useUserData';
import useDocument from '../../graphql/useDocument';
import Loading from './../Loading';
import DataCard from '../DataCard';
import styled from '@emotion/styled';

function Saved() {
	const app = useRealmApp();
	const { documents, loading } = useUserData(app?.currentUser?.profile?.email);
	const [value, setValue] = useState(0);

	return loading ? (
		<Container style={{ display: 'flex', height: '400px', justifyContent: 'center', alignItems: 'center' }}>
			<Loading />
		</Container>
	) : documents.length > 0 ? (
		<Container fluid className="mx-auto" style={{ width: '65%' }}>
			<Row style={{ display: 'grid', gridTemplateColumns: '18rem 18rem 18rem ', gridGap: '10%', marginTop: '30px' }}>
				{documents[value].memberOf.map((d, i) => {
					return (
						<Col key={i} md="auto">
							<DataCard
								key={i}
								headline={d._partition}
								field1={'Total Cases'}
								field2={'Total Deaths'}
								field3={'Total Recovered'}
								data1={d.cases}
								data2={d.deaths}
								data3={d.recovered}
								del={'show'}
							/>
						</Col>
					);
				})}
			</Row>
		</Container>
	) : (
		<div>
			<h1>No data yet...</h1>
		</div>
	);
}

export default Saved;

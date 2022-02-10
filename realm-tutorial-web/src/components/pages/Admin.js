import React, { useState } from 'react';
import { useRealmApp } from '../../RealmApp';
import { Container, Row, Col } from 'react-bootstrap';
import useAllDocuments from '../../graphql/useDocuments';
import useDocument from '../../graphql/useDocument';
import Loading from './../Loading';
import DataCard from '../DataCard';
import styled from '@emotion/styled';

function Admin() {
	const app = useRealmApp();
	const { document } = useDocument(app?.currentUser?.profile?.email);
	const { documents, loading } = useAllDocuments();
	const [value, setValue] = useState(0);

	return loading ? (
		<Container style={{ display: 'flex', height: '400px', justifyContent: 'center', alignItems: 'center' }}>
			<Loading />
		</Container>
	) : document?.type === 'admin' && documents.length > 0 ? (
		<Container fluid className="mx-auto" style={{ width: '65%' }}>
			<Select
				className="form-select"
				onChange={(e) => {
					let index = e.target.options[e.target.options.selectedIndex].getAttribute('data-key');
					setValue(index);
				}}
			>
				{documents.map((c, i) => {
					return (
						<option data-key={i} key={i} value={c._id}>
							{c._id}
						</option>
					);
				})}
			</Select>
			<Row style={{ display: 'grid', gridTemplateColumns: '18rem 18rem 18rem ', gridGap: '10%', marginTop: '30px' }}>
				{documents[value].memberOf.map((d, i) => {
					return (
						<Col>
							<DataCard
								key={i}
								headline={d._partition}
								field1={'Total Cases'}
								field2={'Total Deaths'}
								field3={'Total Recovered'}
								data1={d.cases}
								data2={d.deaths}
								data3={d.recovered}
								del={'delete'}
							/>
						</Col>
					);
				})}
			</Row>
		</Container>
	) : (
		<div>no permission :( </div>
	);
}

export default Admin;

const Select = styled.select`
	margin: 40px;
	background: rgba(0, 0, 0, 0.3);
	color: #fff;
	text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
`;

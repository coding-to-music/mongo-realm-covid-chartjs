import React, { useState } from 'react';
import { useRealmApp } from '../../RealmApp';
import { Container, Row, Col } from 'react-bootstrap';
import useAllDocuments from '../../graphql/useDocuments';
import useDocument from '../../graphql/useDocument';
import Loading from './../Loading';
import DataCard from '../DataCard';
import styled from '@emotion/styled';
import './../Container.css';
function Admin() {
	const app = useRealmApp();
	const { document } = useDocument(app?.currentUser?.profile?.email);
	const { documents, loading } = useAllDocuments();
	const [index, setIndex] = useState(0);

	return loading ? (
		<Container style={{ display: 'flex', height: '400px', justifyContent: 'center', alignItems: 'center' }}>
			<Loading />
		</Container>
	) : document?.type === 'admin' && documents.length > 0 ? (
		<Container className="mx-auto justify-content-center">
			<Row className=" d-flex justify-content-center ">
				<Col md="auto" className="d-flex justify-content-center ">
					<Select
						className="form-select"
						onChange={(e) => {
							let index = e.target.options[e.target.options.selectedIndex].getAttribute('data-key');
							setIndex(index);
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
				</Col>
			</Row>
			<Row className="d-flex justify-content-center " style={{ display: 'flex', flexWrap: 'wrap' }}>
				{documents[index].memberOf.map((d, i) => {
					return (
						<Col key={i} className="col-sm mt-4 d-flex align-items-center justify-content-center">
							<DataCard
								key={i}
								headline={d._partition}
								field1={'Total Cases'}
								field2={'Total Deaths'}
								field3={'Total Recovered'}
								data1={d.cases}
								data2={d.deaths}
								data3={d.recovered}
								func="delete"
								deleteId={documents[index]._id}
							/>
						</Col>
					);
				})}
			</Row>
		</Container>
	) : (
		<h1 style={{ color: 'white' }}>no permission :( </h1>
	);
}

export default Admin;

const Select = styled.select`
	margin: 40px;
	background: rgba(0, 0, 0, 0.3);
	color: #fff;
	text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
`;

import React, { useState } from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { useRealmApp } from '../RealmApp';
import styled from '@emotion/styled';
export default function DataCard({ headline, field1, field2, field3, field4, data1, data2, data3, data4, imgSrc, func, deleteId }) {
	const app = useRealmApp();
	const { addData, deleteStat } = app?.currentUser?.functions;
	const [disp, setDisp] = useState('block');

	return (
		<ListGroup
			style={{
				borderRadius: '20px',
				display: disp,
				width: '18rem',
				boxShadow: 'rgba(255, 255, 255, 0.35) 0px 5px 15px',
			}}
			className="mb-2"
		>
			<Item style={{ backgroundColor: 'rgba(50, 50, 50, 0.2)', fontSize: '20px' }}>
				{headline} Covid Stats
				<img alt="" src={imgSrc} style={{ marginLeft: '4px', width: '30px', hegith: '30px' }} />
			</Item>
			<Item>
				{field1}: {data1}
			</Item>
			<Item>
				{field2}: {data2}
			</Item>
			<Item>
				{field3}: {data3}
			</Item>
			{field4 && (
				<Item>
					{field4}: {data4}
				</Item>
			)}
			{func === 'save' && (
				<Item>
					<Button
						onClick={async () => {
							try {
								let email = app?.currentUser?.profile?.email;
								await addData(email, headline, data1.toString(), data2.toString(), data3.toString());
								alert('Data saved :)');
							} catch (error) {
								console.log(error);
							}
						}}
						style={{ backgroundColor: 'rgba(75, 192, 192, 0.8)', borderColor: 'rgba(75, 192, 192, 0.5)', borderRadius: '10px' }}
					>
						Save Data
					</Button>{' '}
				</Item>
			)}
			{func === 'delete' && (
				<Item>
					<Button
						onClick={async () => {
							try {
								console.log(deleteId);
								await deleteStat(deleteId, headline, data1.toString(), data2.toString(), data3.toString());
							} catch (error) {
								console.log(error);
							}
							setDisp('none');
						}}
						variant="danger"
						style={{ borderRadius: '10px' }}
					>
						Delete Data
					</Button>{' '}
				</Item>
			)}
		</ListGroup>
	);
}

const Item = styled(ListGroup.Item)`
	background-color: rgba(220, 220, 220, 0.2);
	color: white;
`;

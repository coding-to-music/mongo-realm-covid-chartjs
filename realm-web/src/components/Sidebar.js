import React from 'react';
import styled from '@emotion/styled';
import { useRealmApp } from '../RealmApp';
import Button from 'react-bootstrap/Button';
import { Navbar } from 'react-bootstrap';
export default function Sidebar() {
	const app = useRealmApp();

	return (
		<UserDetails
			user={app.currentUser}
			handleLogout={() => {
				app.logOut();
			}}
		/>
	);
}

function UserDetails({ user, handleLogout }) {
	return (
		<UserDetailsContainer>
			<Navbar.Text className="mx-2">
				Signed in as:{' '}
				<Navbar.Text id="username" style={{ color: 'white' }}>
					{user.profile.email}
				</Navbar.Text>
			</Navbar.Text>
			<Button className="mx-2 btn-xs" variant="outline-secondary" onClick={handleLogout}>
				Log Out
			</Button>
		</UserDetailsContainer>
	);
}

const UserDetailsContainer = styled.div`
	display: flex;
	flex-direction: row;
`;

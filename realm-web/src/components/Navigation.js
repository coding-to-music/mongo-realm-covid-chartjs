import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from './../images/logo.png';
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { useRealmApp } from './../RealmApp';
import Sidebar from './Sidebar';
import styled from '@emotion/styled';

function Navigation() {
	const app = useRealmApp();
	const [currentProject, setCurrentProject] = React.useState(
		// set the current project as  "My Project"
		app.currentUser.customData.memberOf[0]
	);
	return (
		<Navbar bg="dark" expand="lg" variant="dark" sticky="top">
			<Container fluid>
				<Navbar.Brand className="mx-3">
					<LogoImg className="d-inline-block align-top" /> Covid-Stats
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="justify-content-center" style={{ flex: 1 }}>
						<LinkContainer to="/">
							<Nav.Link>Home</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/countries">
							<Nav.Link>Countries</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/continents">
							<Nav.Link>Continents</Nav.Link>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
				<Nav>
					<LinkContainer to="/saved">
						<Nav.Link>Saved Data</Nav.Link>
					</LinkContainer>
					<Sidebar currentProject={currentProject} setCurrentProject={setCurrentProject}></Sidebar>
				</Nav>
			</Container>
		</Navbar>
	);
}
export default Navigation;

const LogoImg = styled.div`
	background-image: url(${logo});
	width: 30px;
	height: 30px;
	background-size: cover;
	background-repeat: no-repeat;
	position: relative;
	filter: invert(var(--value, 100%));
`;

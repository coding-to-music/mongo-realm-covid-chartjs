import React from 'react';
import styled from '@emotion/styled';

const Footer = () => {
	return (
		<Box>
			<Container>
				<Row>
					<Column>
						<Heading>About Us</Heading>
						<FooterLink href="#">Aim</FooterLink>
						<FooterLink href="#">Vision</FooterLink>
					</Column>
					<Column>
						<Heading>Services</Heading>
						<FooterLink href="/">Home</FooterLink>
						<FooterLink href="/countries">Countries</FooterLink>
						<FooterLink href="/continents">Continents</FooterLink>
						<FooterLink href="/saved">Saved Data</FooterLink>
					</Column>
					<Column>
						<Heading>Contact Us</Heading>
						<FooterLink href="#">Israel</FooterLink>
						<FooterLink href="#">USA</FooterLink>
						<FooterLink href="#">Spain</FooterLink>
						<FooterLink href="#">Germany</FooterLink>
					</Column>
					<Column>
						<Heading>Social Media</Heading>
						<FooterLink href="#">
							<i className="fab fa-facebook-f">
								<span style={{ marginLeft: '10px' }}>Facebook</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-instagram">
								<span style={{ marginLeft: '10px' }}>Instagram</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-twitter">
								<span style={{ marginLeft: '10px' }}>Twitter</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-youtube">
								<span style={{ marginLeft: '10px' }}>Youtube</span>
							</i>
						</FooterLink>
					</Column>
				</Row>
			</Container>
		</Box>
	);
};
export default Footer;

const Box = styled.div`
	padding: 40px 20px;
	position: realtive;
	bottom: 0;
	width: 100%;
	margin-top: 200px;
	background-color: rgb(65, 65, 65);
	@media (max-width: 1000px) {
		padding: 70px 30px;
	}
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
`;

const Column = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	margin-left: 60px;
`;

const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
	grid-gap: 20px;

	@media (max-width: 1000px) {
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	}
`;

const FooterLink = styled.a`
	color: black;
	margin-bottom: 20px;
	font-size: 18px;
	text-decoration: none;

	&:hover {
		color: rgba(75, 192, 192, 1);
		transition: 200ms ease-in;
	}
`;

const Heading = styled.p`
	font-size: 24px;
	color: black;
	margin-bottom: 40px;
	font-weight: bold;
`;

import React from 'react';
import LoginScreen from './components/LoginScreen';
import TaskApp from './TaskApp';
import RealmApolloProvider from './graphql/RealmApolloProvider';
import { useRealmApp, RealmAppProvider } from './RealmApp';
export const APP_ID = 'mongo-realm-covid-chartjs-ryfil';
// export const APP_ID = 'ex3-ejuun';

const RequireLoggedInUser = ({ children }) => {
	// Only render children if there is a logged in user.
	const app = useRealmApp();
	return app.currentUser ? children : <LoginScreen />;
};

export default function App() {
	return (
		<RealmAppProvider appId={APP_ID}>
			<RequireLoggedInUser>
				<RealmApolloProvider>
					<TaskApp />
				</RealmApolloProvider>
			</RequireLoggedInUser>
		</RealmAppProvider>
	);
}

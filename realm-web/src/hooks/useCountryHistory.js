import { useState, useEffect } from 'react';
// API
import API from '../API';
// Helpers

const initialState = {
	results: [],
};

export const useCountryHistory = () => {
	const [history, setState] = useState(initialState);
	const [historyError, setError] = useState(false);
	const [loading, setLoading] = useState(false);
	const fetchCountries = async () => {
		try {
			setError(false);
			setLoading(true);
			const history = await API.fetchCountryHistory();
			setState(() => ({
				results: [...history],
			}));
		} catch (error) {
			setError(true);
		}
		setLoading(false);
	};

	// Search and initial
	useEffect(() => {
		console.log('Grabbing from API');
		setState(initialState);
		fetchCountries();
	}, []);

	return { history, historyError, loading };
};

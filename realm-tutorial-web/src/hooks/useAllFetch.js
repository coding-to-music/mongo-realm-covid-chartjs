import { useState, useEffect } from 'react';
// API
import API from '../API';
// Helpers

const initialState = {
	results: {},
};

export const useAllFetch = () => {
	const [all, setState] = useState(initialState);
	const [allError, setError] = useState(false);

	const fetchCountries = async () => {
		try {
			setError(false);

			const all = await API.fetchAll();
			setState(() => ({
				results: all,
			}));
		} catch (error) {
			setError(true);
		}
	};

	// Search and initial
	useEffect(() => {
		console.log('Grabbing from API');
		setState(initialState);
		fetchCountries();
	}, []);

	return { all, allError };
};

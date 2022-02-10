import { useState, useEffect } from 'react';
// API
import API from '../API';
// Helpers

const initialState = {
	results: [],
};

export const useCountriesFetch = () => {
	const [countries, setState] = useState(initialState);
	const [countriesError, setError] = useState(false);

	const fetchCountries = async () => {
		try {
			setError(false);

			const countires = await API.fetchAllCountries();
			setState(() => ({
				results: [...countires],
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

	return { countries, countriesError };
};

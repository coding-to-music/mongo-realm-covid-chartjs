import { useState, useEffect } from 'react';
// API
import API from '../API';
// Helpers

const initialState = {
	results: [],
};

export const useContinentsFetch = () => {
	const [continents, setState] = useState(initialState);
	const [continentsError, setError] = useState(false);
	const [loading, setLoading] = useState(false);
	const fetchContinents = async () => {
		try {
			setError(false);
			setLoading(true);
			const continents = await API.fetchContinents();
			setState(() => ({
				results: [...continents],
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
		fetchContinents();
	}, []);

	return { continents, continentsError, loading };
};

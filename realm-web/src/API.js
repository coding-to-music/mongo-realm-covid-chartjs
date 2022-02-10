import { API_URL_CONTINETS, API_URL_COUNTRIES, API_URL_ALL, API_URL_COUNTRY_HISTORY } from './config';

const apiSettings = {
	fetchAllCountries: async () => {
		const endpoint = `${API_URL_COUNTRIES}`;
		return await (await fetch(endpoint)).json();
	},

	fetchAll: async () => {
		const endpoint = `${API_URL_ALL}`;
		return await (await fetch(endpoint)).json();
	},

	fetchCountryHistory: async () => {
		const endpoint = `${API_URL_COUNTRY_HISTORY}`;
		return await (await fetch(endpoint)).json();
	},

	fetchContinents: async () => {
		const endpoint = `${API_URL_CONTINETS}`;
		return await (await fetch(endpoint)).json();
	},
};

export default apiSettings;

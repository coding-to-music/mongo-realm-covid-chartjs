import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const GetUserData = gql`
	query {
		data(query: { _id: "shalev@gmail.com" }) {
			_id
			type
			memberOf {
				_partition
				cases
				deaths
				recovered
			}
		}
	}
`;
export default function useAllDocuments() {
	const { data, loading, error, startPolling, stopPolling } = useQuery(GetUserData, {});
	React.useEffect(() => {
		// check server for updates every 1000ms
		startPolling(1000);
		// stop polling server for data when component unmounts
		return () => stopPolling();
	}, [startPolling, stopPolling]);
	if (error) {
		throw new Error(`Failed to fetch tasks: ${error.message}`);
	}
	// If the query has finished, return the tasks from the result data
	// Otherwise, return an empty list
	const documents = data?.data ?? [];
	return {
		documents,
		loading,
	};
}

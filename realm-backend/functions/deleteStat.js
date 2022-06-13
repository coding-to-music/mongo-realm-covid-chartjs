exports = async function (email, name, casesVal, deathsVal, recoveredVal) {
	const collection = context.services.get('mongodb-atlas').db('tracker').collection('Data');

	return collection.updateOne(
		{ _id: email },
		{
			$pull: {
				memberOf: {
					_partition: name,
					cases: casesVal,
					deaths: deathsVal,
					recovered: recoveredVal,
				},
			},
		},
		{
			multi: true,
		}
	);
};

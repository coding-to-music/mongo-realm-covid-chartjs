exports = async function (email, name, casesVal, deathsVal, recoveredVal) {
	const cluster = context.services.get('mongodb-atlas');
	const data = cluster.db('tracker').collection('Data');
	const filter = { _id: email };
	const user = await data.findOne(filter);

	if (user == null) {
		return data.insertOne({
			_id: email,
			type: 'normal',
			memberOf: [
				{
					_partition: name,
					cases: casesVal,
					deaths: deathsVal,
					recovered: recoveredVal,
				},
			],
		});
	} else {
		data.updateOne(
			{ _id: email },

			{
				$push: {
					memberOf: {
						_partition: name,
						cases: casesVal,
						deaths: deathsVal,
						recovered: recoveredVal,
					},
				},
			}
		);
	}
};

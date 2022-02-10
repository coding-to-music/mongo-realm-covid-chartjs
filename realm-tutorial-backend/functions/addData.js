exports = async function (email,name,casesVal,deathsVal,recoveredVal) {
	const cluster = context.services.get('mongodb-atlas');
	const data = cluster.db('tracker').collection('Data');
	const filter = {_id: email};
	const user = await data.findOne(filter);
  
  if(user == null){
    return data.insertOne({
		_id: email,
		memberOf:[{
		  _partition: name,
		  cases: casesVal,
		  deaths: deathsVal,
		  recovered: recoveredVal,
		}],
		
	});
    
  }
  else{
    data.updateOne(
      {_id : email
      },
      { $push: {
          memberOf:{
            _partition: name,
		        cases: casesVal,
		        deaths: deathsVal,
		        recovered: recoveredVal
          }
        }
      }
    );
  }
	
	
};


SCHEMA:
{
	"_id": {
	  "bsonType": "string"
	},
	"memberOf": {
	  "bsonType": "array",
	  "items": {
		"bsonType": "object",
		"properties": {
		  "_partition": {
			"bsonType": "string"
		  },
		  "cases": {
			"bsonType": "number"
		  },
		  "deaths": {
			"bsonType": "number"
		  },
		  "recovered": {
			"bsonType": "number"
		  }
		},
		"title": "Stats"
	  }
	},
	"title": "Stat"
  }

  advanced
  {
	"roles": [
	  {
		"name": "default",
		"apply_when": {},
		"insert": true,
		"delete": true,
		"search": true,
		"write": true,
		"fields": {},
		"additional_fields": {}
	  }
	],
	"filters": [],
	"schema": {
	  "_id": {
		"bsonType": "string"
	  },
	  "memberOf": {
		"bsonType": "array",
		"items": {
		  "bsonType": "object",
		  "properties": {
			"_partition": {
			  "bsonType": "string"
			},
			"cases": {
			  "bsonType": "number"
			},
			"deaths": {
			  "bsonType": "number"
			},
			"recovered": {
			  "bsonType": "number"
			}
		  },
		  "title": "Stats"
		}
	  },
	  "title": "Stat"
	}
  }
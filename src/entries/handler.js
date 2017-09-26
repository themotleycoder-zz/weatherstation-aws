'use strict';

console.log('Loading function');

const doc = require('dynamodb-doc');

const dynamo = new doc.DynamoDB();

exports.handler = (event, context, callback) => {
  //console.log('Received event:', JSON.stringify(event, null, 2));

  const done = (err, res) => callback(null, {
    statusCode: err ? '400' : '200',
    body: err ? err.message : JSON.stringify(res),
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
      "Access-Control-Allow-Headers" : "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token"
    },
  });

  var limit = event.queryStringParameters.count;
  if (null===limit){
    limit = 144;
  }

  switch (event.httpMethod) {
    case 'GET':
      dynamo.scan({
        TableName: "weather_data",
        Limit: limit

      }, done);
      break;
    default:
      done(new Error(`Unsupported method "${event.httpMethod}"`));
  }
};

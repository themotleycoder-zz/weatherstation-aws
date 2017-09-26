'use strict';

console.log('Loading function');

const doc = require('dynamodb-doc');

const dynamo = new doc.DynamoDB();

exports.handler = (event, context, callback) => {
    const done = (err, res) => callback(null, {
    statusCode: err ? '400' : '200',
    body: err ? err.message : JSON.stringify(res),
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin" : "*" // Required for CORS support to work
    },
  });

  var id = event.queryStringParameters.id;

  switch (event.httpMethod) {
    case 'GET':
      break;
    default:
      done(new Error(`Unsupported method "${event.httpMethod}"`));
  }
};

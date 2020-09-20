const pactum = require('pactum');
const { Given, When, Then, Before } = require('@cucumber/cucumber');

let spec = pactum.spec();

Before(() => {
  spec = pactum.spec();
});

Given('I make a {string} request to {string}', function (method, endpoint) {
  spec[method.toLowerCase()](endpoint);
});

When('I receive a response', async function () {
  await spec.toss();
});

Then('response should have a status {int}', function (code) {
  spec.response().to.have.status(200);
});

Then(/^response should have a json$/, function (json) {
  spec.response().to.have.json(JSON.parse(json));
});

Then(/^response should have a json like$/, function (json) {
  spec.response().to.have.jsonLike(JSON.parse(json));
});

Then(/^response should have a json schema$/, function (json) {
  spec.response().to.have.jsonSchema(JSON.parse(json));
});

Then(/^response should have a body$/, function (body) {
  spec.response().to.have.body(body);
});

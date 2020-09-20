const pactum = require('pactum');
const { Given, When, Then, Before } = require('@cucumber/cucumber');

let spec = pactum.spec();

Before(() => {
  spec = pactum.spec();
});

Given('I make a {string} request to {string}', function (method, endpoint) {
  spec[method.toLowerCase()](endpoint);
});

Given('I set query param {string} to {string}', function (key, value) {
  spec.withQueryParams(key, value);
});

Given('I set header {string} to {string}', function (key, value) {
  spec.withHeaders(key, value);
});

Given(/I set body to/, function (body) {
  spec.withBody(body);
});

When('I receive a response', async function () {
  await spec.toss();
});

Then('I expect response should have a status {int}', function (code) {
  spec.response().should.have.status(code);
});

Then(/^I expect response should have a json$/, function (json) {
  spec.response().should.have.json(JSON.parse(json));
});

Then(/^I expect response should have a json like$/, function (json) {
  spec.response().should.have.jsonLike(JSON.parse(json));
});

Then(/^I expect response should have a json schema$/, function (json) {
  spec.response().should.have.jsonSchema(JSON.parse(json));
});

Then(/^I expect response should have a body$/, function (body) {
  spec.response().should.have.body(body);
});

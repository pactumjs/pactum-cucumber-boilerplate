const pactum = require('pactum');
const { Given, When, Then, Before } = require('@cucumber/cucumber');

let spec = pactum.spec();

Before(() => {
  spec = pactum.spec();
});

Given(/^I make a (.*) request to (.*)$/, function (method, endpoint) {
  spec[method.toLowerCase()](endpoint);
});

Given(/^I set path param (.*) to (.*)$/, function (key, value) {
  spec.withPathParams(key, value);
});

Given(/^I set query param (.*) to (.*)$/, function (key, value) {
  spec.withQueryParams(key, value);
});

Given(/^I set header (.*) to (.*)$/, function (key, value) {
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

Then(/^I expect response should have a json at (.*)$/, function (path, value) {
  spec.response().should.have.jsonAt(path, JSON.parse(value));
});

Then(/^I expect response should have a json like$/, function (json) {
  spec.response().should.have.jsonLike(JSON.parse(json));
});

Then(/^I expect response should have a json like at (.*)$/, function (path, value) {
  spec.response().should.have.jsonLikeAt(path, JSON.parse(value));
});

Then(/^I expect response should have a json schema$/, function (json) {
  spec.response().should.have.jsonSchema(JSON.parse(json));
});

Then(/^I expect response should have a json schema at (.*)$/, function (path, value) {
  spec.response().should.have.jsonSchemaAt(path, JSON.parse(value));
});

Then(/^I expect response should have a body$/, function (body) {
  spec.response().should.have.body(body);
});

Then('I expect response should have {string}', function (handler) {
  spec.response().should.have._(handler);
});

Then(/^I store response at (.*) as (.*)$/, function (path, name) {
  spec.stores(name, path);
});
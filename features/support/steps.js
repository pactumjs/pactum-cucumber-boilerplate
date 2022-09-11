const pactum = require('pactum');
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');

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

Given(/^I set basic authentication credentials (.*) and (.*)$/, function (username, password) {
  spec.withAuth(username, password);
});

Given(/^I set header (.*) to (.*)$/, function (key, value) {
  spec.withHeaders(key, value);
});

Given(/^I set cookie (.*) to (.*)$/, function (key, value) {
  spec.withCookies(key, value);
});

Given(/I set body to/, function (body) {
  try {
    spec.withJson(JSON.parse(body));
  } catch(error) {
    spec.withBody(body);
  }
});

Given(/^I upload file at (.*)$/, function (filePath) {
  spec.withFile(filePath);
});

Given(/^I set multi-part form param (.*) to (.*)$/, function (key, value) {
  spec.withMultiPartFormData(key, value);
});

Given(/I set form-data to/, function (form) {
  spec.withForm(form);
});

Given(/I set inspection/, function (body) {
  spec.inspect();
});

When('I receive a response', async function () {
  await spec.toss();
});

Then(/^I expect response to match a json snapshot (.*)$/, async function (name) {
  spec.response().should.have.jsonSnapshot(name);
});

Then('I expect response should have a status {int}', function (code) {
  spec.response().should.have.status(code);
});

Then(/^I expect response header (.*) should be (.*)$/, function (key, value) {
  spec.response().should.have.header(key, value);
});

Then(/^I expect response header (.*) should have (.*)$/, function (key, value) {
  spec.response().should.have.headerContains(key, value)
});

Then(/^I expect response cookie (.*) should be (.*)$/, function (key, value) {
  spec.response().should.have.cookies(key, value);
});

Then(/^I expect response should have a json$/, function (json) {
  spec.response().should.have.json(JSON.parse(json));
});

Then(/^I expect response should have a json at (.*)$/, function (path, value) {
  spec.response().should.have.json(path, JSON.parse(value));
});

Then(/^I expect response should have a json like$/, function (json) {
  spec.response().should.have.jsonLike(JSON.parse(json));
});

Then(/^I expect response should have a json like at (.*)$/, function (path, value) {
  spec.response().should.have.jsonLike(path, JSON.parse(value));
});

Then(/^I expect response should have a json schema$/, function (json) {
  spec.response().should.have.jsonSchema(JSON.parse(json));
});

Then(/^I expect response should have a json schema at (.*)$/, function (path, value) {
  spec.response().should.have.jsonSchema(path, JSON.parse(value));
});

Then(/^I expect response should have a body$/, function (body) {
  spec.response().should.have.body(body);
});

Then(/^I expect response body should contain (.*)$/, function (value) {
  spec.response().should.have.bodyContains(value);
});

Then('I expect response should have {string}', function (handler) {
  spec.response().should.have._(handler);
});

Then('I expect response time should be less than {int} ms', function (ms) {
  spec.response().should.have.responseTimeLessThan(ms)
});

Then(/^I store response at (.*) as (.*)$/, function (path, name) {
  spec.stores(name, path);
});

After(() => {
  spec.end();
});
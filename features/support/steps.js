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
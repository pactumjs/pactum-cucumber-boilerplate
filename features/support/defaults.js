// Set Default Settings Here
// - Base URL
// - Headers

const pactum = require('pactum');
const request = pactum.request;
const { Before } = require('@cucumber/cucumber');

Before({ tags: '@Regres' }, () => {
  request.setBaseUrl('https://reqres.in');
});
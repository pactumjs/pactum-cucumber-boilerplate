// Set Default Settings Here
// - Base URL
// - Headers

const request = require('pactum').request;
const { Before } = require('@cucumber/cucumber');

Before({ tags: '@Regres' }, () => {
  request.setBaseUrl('https://reqres.in');
});
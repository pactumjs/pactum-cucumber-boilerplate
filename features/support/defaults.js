const { request } = require('pactum');
const { Before } = require('@cucumber/cucumber');

Before(() => {
  request.setBaseUrl('https://reqres.in');
});
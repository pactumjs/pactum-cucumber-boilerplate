const { request, settings } = require('pactum');
const { Before } = require('@cucumber/cucumber');

Before(() => {
  request.setBaseUrl('https://reqres.in');
  settings.setReporterAutoRun(false);
});
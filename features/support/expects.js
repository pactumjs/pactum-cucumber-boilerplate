// Add Custom Expectations Here

const { handler, expect } = require('pactum');
const { Before } = require('@cucumber/cucumber');

Before(() => {

  handler.addExpectHandler('valid male user details', (ctx) => {
    const response = ctx.res;
    expect(response).to.have.status(200);
    expect(response).to.have.header('content-type', 'application/json; charset=utf-8');
    expect(response).to.have.jsonQuery('results[0].gender', 'male');
    expect(response).to.have.jsonSchema({
      type: 'object',
      properties: {
        results: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              name: {
                type: 'object'
              }
            }
          }
        }
      }
    });
    expect(response).to.have.responseTimeLessThan(3000);
  });

});
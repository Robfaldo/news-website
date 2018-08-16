const {assert} = require('chai');
const sinon = require('sinon');
const request = require('supertest');
const app = require('../index');
const axios = require('axios');
const server = require('../services/apiService.js')

describe('Server path /', () => {
  describe('GET', () => {
    let apiStub;

    beforeEach(() => {
      const fakeResponse = [{location: "fakeLocation", uri: "fakeUri", title: {title: "fakeTitle"}}];
      apiStub = sinon.stub(server, 'requestData').resolves(fakeResponse);
    });

    afterEach(() => {
      sinon.restore();
    });

    it('requests data from the API', async () => {
      await request(app).get('/');
      assert.equal(apiStub.withArgs({queryString: ""}).calledOnce, true);
    });
  });
});

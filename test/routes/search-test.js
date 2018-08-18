const {assert} = require('chai');
const sinon = require('sinon');
const request = require('supertest');
const app = require('../../index');
const server = require('../../services/apiService.js')

describe('Server path /search', () => {
  let apiStub;

  beforeEach(() => {
    const fakeResponse = [{location: "fakeLocation", uri: "fakeUri", title: {title: "fakeTitle"}}];
    apiStub = sinon.stub(server, 'requestData').resolves(fakeResponse);
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('GET', () => {
    it('requests data from the API with the specified query', async () => {
      const queryString = "Example query"
      await request(app)
        .get('/search')
        .set('querystring', queryString);
      assert.equal(apiStub.withArgs({queryString: queryString}).calledOnce, true);
    });
  });
});

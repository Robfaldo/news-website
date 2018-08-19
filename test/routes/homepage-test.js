const {assert} = require('chai');
const sinon = require('sinon');
const request = require('supertest');
const app = require('../../index');
const server = require('../../services/apiService.js')

describe('Server path /', () => {
  let apiStub;

  beforeEach(() => {
    const fakeResponse = [
      {
        location: { uri: "fakeUri" },
        title: { title: "fakeTitle" },
        summary: { excerpt: "fakeExcerpt" }
      }
    ];
    apiStub = sinon.stub(server, 'requestData').resolves(fakeResponse);
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('GET', () => {
    it('requests data from the API', async () => {
      await request(app).get('/');
      assert.equal(apiStub.withArgs({queryString: ""}).calledOnce, true);
    });
  });
});

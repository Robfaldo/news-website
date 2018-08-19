const { assert } = require('chai');
const sinon = require('sinon');
const request = require('supertest');
const app = require('../../app');
const server = require('../../services/apiService.js');

describe('Server path /search', () => {
  describe('GET', () => {
    let apiStub;

    describe('When search is successful and returns articles', () => {
      beforeEach(() => {
        const fakeResponse = [
          {
            location: { uri: 'fakeUri' },
            title: { title: 'fakeTitle' },
            summary: { excerpt: 'fakeExcerpt' },
          },
        ];
        apiStub = sinon.stub(server, 'requestData').resolves(fakeResponse);
      });

      afterEach(() => {
        sinon.restore();
      });

      it('requests data from the API with the specified query', async () => {
        const testQueryString = 'TestQuery';
        await request(app)
          .get(`/search?querystring=${testQueryString}`);
        assert.equal(apiStub.withArgs({ queryString: testQueryString }).calledOnce, true);
      });
    });

    describe('When search is unsuccessful and does not return articles', () => {
      beforeEach(() => {
        apiStub = sinon.stub(server, 'requestData').resolves(undefined);
      });

      afterEach(() => {
        sinon.restore();
      });
      it('returns a div with no search results message', async () => {
        const expectedDivElement = '<div class="no-results-message"> No matching results. Please try another search </div>';
        const queryString = 'TestQuery';
        const response = await request(app)
          .get(`/search?querystring=${queryString}`);

        assert.include(response.text, expectedDivElement);
      });
    });
  });
});

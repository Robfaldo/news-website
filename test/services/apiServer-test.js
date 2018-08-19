const { assert } = require('chai');
const sinon = require('sinon');
const axios = require('axios');
const ApiService = require('../../services/apiService.js');

describe('ApiService', () => {
  let spy;
  beforeEach(() => {
    spy = sinon.spy(axios, 'post');
    ApiService.requestData({ queryString: 'Example query string' });
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('#requestData', () => {
    it('makes a single post request to the FT API url', () => {
      const expectedUrl = 'http://api.ft.com/content/search/v1';
      assert.equal(spy.calledOnce, true);
      assert.deepEqual(spy.args[0][0], expectedUrl);
    });
    it('makes request with the api key and content type as headers', () => {
      const expectedHeaders = {
        'X-Api-Key': '59cbaf20e3e06d3565778e7b3cf30e4ecd1d4acc8ad7c328aa6c76bb',
        'Content-Type': 'application/json',
      };
      assert.deepEqual(spy.args[0][2].headers, expectedHeaders);
    });
    it('makes request with the queryString provided', () => {
      const expectedQuery = 'Example query string';
      assert.deepEqual(spy.args[0][1].queryString, expectedQuery);
    });
  });
});

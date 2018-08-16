const {assert} = require('chai');
const sinon = require('sinon');
const request = require('supertest');
const app = require('../index');
const expect = require('chai').expect;


describe('Server path /', () => {
  describe('GET', () => {
    it('makes a call to FT API for all articles', async () => {
      let response = await request(app)
        .get('/')

      assert.include(response.text, "articles")
    });
  });
});

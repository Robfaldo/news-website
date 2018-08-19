context('User visits the homepage', () => {
  let stubbedArticlesFromSearch;

  beforeEach(() => {
    stubbedArticlesFromSearch = [
      { location: { uri: 'fakeUri1' }, title: { title: 'fakeTitle1' } },
      { location: { uri: 'fakeUri2' }, title: { title: 'fakeTitle2' } },
      { location: { uri: 'fakeUri3' }, title: { title: 'fakeTitle3' } },
    ];
    cy.visit('localhost:8080');
    cy.server();
    cy.route({
      method: 'GET',
      url: '/search',
      response: stubbedArticlesFromSearch,
    });
  });

  it('articles have summaries on load', () => {
    cy.get('div.article').children('.article-summary')
      .its('length').should('not.eq', 0);
  });
});

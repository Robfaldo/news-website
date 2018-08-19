context('User enters a search', () => {
  let stubbedArticlesFromSearch;

  beforeEach(() => {
    stubbedArticlesFromSearch = [
      {location: { uri: "fakeUri1" }, title: {title: "fakeTitle1"}},
      {location: { uri: "fakeUri2" }, title: {title: "fakeTitle2"}},
      {location: { uri: "fakeUri3" }, title: {title: "fakeTitle3"}}
    ]
    cy.visit('localhost:8080')
    cy.server();
    cy.route({
      method: 'GET',
      url: '/search',
      response: stubbedArticlesFromSearch
    });
  })

  it('shows the articles from that search', () => {
    cy.get('#search')
      .type('Example search query');
    cy.get('#search-submit').click();

    cy.contains('fakeTitle1');
    cy.contains('fakeTitle2');
    cy.contains('fakeTitle3');
  });

  it('articles are hyperlinked to article uri', () => {
    cy.get('#search')
      .type('Example search query');
    cy.get('#search-submit').click();

    cy.get('#article-1 > a')
      .should('have.attr', 'href', 'fakeUri1')
  });
})

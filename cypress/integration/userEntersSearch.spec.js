context('User enters a search', () => {
  let stubbedArticlesFromSearch;

  beforeEach(() => {
    stubbedArticlesFromSearch = [
      {location: { uri: "fakeUri1" }, title: {title: "fakeTitle1"}, summary: { excerpt: "fakeExcerpt"}},
      {location: { uri: "fakeUri2" }, title: {title: "fakeTitle2"}, summary: { excerpt: "fakeExcerpt"}},
      {location: { uri: "fakeUri3" }, title: {title: "fakeTitle3"}, summary: { excerpt: "fakeExcerpt"}}
    ]
    cy.visit('localhost:8080')
    cy.server();
    cy.route({
      method: 'GET',
      url: '/search',
      response: stubbedArticlesFromSearch
    });
    cy.get('#search')
      .type('Example search query');
    cy.get('#search-submit').click();
  })

  it('shows the articles from that search', () => {
    cy.contains('fakeTitle1');
    cy.contains('fakeTitle2');
    cy.contains('fakeTitle3');
  });

  it('articles are hyperlinked to article uri', () => {
    cy.get('#article-1 > a')
      .should('have.attr', 'href', 'fakeUri1')
  });

  it('articles have summaries', () => {
    cy.get('div.article').children('.article-summary')
      .its('length').should('not.eq', 0)
  });
})

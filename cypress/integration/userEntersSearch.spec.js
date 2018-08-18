context('User enters a search', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/')
  })

  it('shows the articles from that search', () => {
    const stubbedArticlesFromSearch = [
      {location: "fakeLocation1", uri: "fakeUri1", title: {title: "fakeTitle1"}},
      {location: "fakeLocation2", uri: "fakeUri2", title: {title: "fakeTitle2"}},
      {location: "fakeLocation3", uri: "fakeUri3", title: {title: "fakeTitle3"}}
    ]
    cy.server();
    cy.route({
      method: 'GET',
      url: '/search',
      response: stubbedArticlesFromSearch
    });

    cy.get('#search')
      .type('Example search query');
    cy.get('.search-submit').click();

    cy.contains('fakeTitle1');
    cy.contains('fakeTitle2');
    cy.contains('fakeTitle3');
  })
})

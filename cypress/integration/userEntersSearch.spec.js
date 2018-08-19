context('User enters a search', () => {
  describe('User clicks the search button', () => {
    beforeEach(() => {
      cy.visit('localhost:8080');
      cy.get('#search')
        .type('Example query string')
        .get('#search-form')
        .submit();
    });

    it('articles are hyperlinked', () => {
      cy.get('#article-1 > a')
        .should('have.attr', 'href');
    });

    it('articles have summaries', () => {
      cy.get('div.article').children('.article-summary')
        .its('length').should('not.eq', 0);
    });
  });

  describe('User hits enter in the search bar', () => {
    it('performs the search', () => {
      cy.visit('localhost:8080');
      cy.spy();
      cy.get('#search')
        .type('Example query string')
        .type('{enter}');
      cy.url().should('eq', 'http://localhost:8080/search?querystring=Example+query+string');
    });
  });
});

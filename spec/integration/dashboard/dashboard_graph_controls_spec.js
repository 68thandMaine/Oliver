describe("Dashboard graph controls", () => {
  before(() => {
    cy.visit('/')
  });

  context("when viewing the controls available", () => {
    it("displays as many buttons as there are are control options", () => {
      cy.readFile('./src/config/dashboardGraphs.json').then((controlOptions) => {
        const totalControls = controlOptions.length;
        cy.get('button').should('have.length', totalControls);
      });
      

    });
    it("the first button at the left is active, all else are inactive", () => {
      cy.get('button').first().should('have.class', 'active');
      cy.get('button').eq(1).should('have.not.class', 'active');
      cy.get('button').eq(2).should('have.not.class', 'active');
      cy.get('button').last().should('not.have.class', 'active');
    });
  });

  context("when interacting with  the available controls", ()=> {
    it("clicking active button does not change it's status", () => {
      cy.get('[data-cy="paycheckBreakdownButton"]').then(($button) => {
        cy.wrap($button).click()
        cy.wrap($button).should('have.class', 'active');
      });
    });
    it("clicking an inactive button removes the current active class and adds it to the clicked button", () => {
      cy.get('[data-cy="paycheckBreakdownButton"]').should('have.class', 'active');
      cy.get('[data-cy="totalDebtButton"]')
        .should('not.have.class', 'active')
        .click().then(() => {
          cy.get('[data-cy="paycheckBreakdownButton"]').should('not.have.class', 
          'active');
          cy.get('[data-cy="totalDebtButton"]').should('have.class', 
          'active');
        });
    });
  });
});
describe('NavBar behavior', () => {
    before(() => {
        cy.visit('/')
    });
    context('when', () => {
        it('clicking an icon changes the active class', () => {
            cy.get("[data-cy='overview']")
                .children('.active')
                .should('exist');
            
            cy.get("[data-cy='goals']")
                .click()
                .children('.active')
                .should('exist');

            cy.get("[data-cy='overview']")
                .children('.active')
                .should('not.exist');
        });
    });
});
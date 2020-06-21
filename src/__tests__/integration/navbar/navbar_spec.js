/* eslint-disable no-undef */
describe("Navbar", () => {
    before(() => {
        cy.visit('/')
		});
		
		context("When clicking on navbar tabs", () => {
			it.only("routes to the account view when the 'Account Info' tab is clicked", () => {
				// cy.get("[data-cy='navbar__link--accounts']").
			});
			it("routes to goal view when the 'Goals' tab is clicked", () => {
				
			});
			it("routes to the settings view when the 'Settings' tab is clicked", () => {

			});
		})

    context("the active link", () => {
        it('only one of the links is active at a time', () => {
            cy.get(".navbar__link--active").should('exist').and('have.length', '1');
            cy.get("[data-cy='navbar__link']").eq(2).click();
            cy.get(".navbar__link--active").should('have.length', '1');
        });

        it('the active link matches the route in url', () => {
            cy.get('.navbar__link--active').as('activeLink').then((activeLink) => {
                console.log(activeLink)
            });
        });
    })
})
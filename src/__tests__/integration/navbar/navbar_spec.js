/* eslint-disable no-undef */
describe("Navbar", () => {
    before(() => {
        cy.visit('/')
		});
		
		context.only("When clicking on navbar tabs", () => {
			it("routes to the account view when the 'Account Info' tab is clicked", () => {
				cy.get("[data-cy='navbar__link--accounts']").click();
				cy.url().should("include", "/accounts")
			});
			it("routes to goal view when the 'Goals' tab is clicked", () => {
				cy.get("[data-cy='navbar__link--goals']").click();
				cy.url().should("include", "/goals")
			});
			it("routes to the settings view when the 'Settings' tab is clicked", () => {
				cy.get("[data-cy='navbar__link--settings']").click();
				cy.url().should("include", "/settings")
			});
			it("routes to the home view when the 'Home' tab is clicked", () => {
				cy.get("[data-cy='navbar__link--home']").click();
				cy.url().should("include", "/")
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
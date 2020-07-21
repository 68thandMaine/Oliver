/* eslint-disable no-undef */
describe("Navbar", () => {
    before(() => {
        cy.visit('/')
		});
		
		context("When clicking on navbar tabs", () => {
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
		});
})
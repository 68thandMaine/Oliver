import { createContext } from "react";

describe("Navbar", () => {
    before(() => {
        cy.visit('/')
    });

    context("the active link", () => {
        it('only one of the links is active at a time', () => {
            cy.get(".navbar__link--active").should('exist').and('have.length', '1');
            cy.get("[data-cy='navbar__link']").eq(2).click();
            cy.get(".navbar__link--active").should('have.length', '1');
        });

        it('the active link matches the route in url', () => {
            cy.get('.navbar__link--active').as('activeLink').then((activeLink) => {
                console.log(activeLink)
            })
        });
    })
})
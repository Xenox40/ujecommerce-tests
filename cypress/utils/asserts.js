import routes, { domains } from "../consts/routes"

export function userIsLoggedIn() {
    cy.visit(domains.customer)
    cy.get('.user-button').click()
    cy.get('a[href="profile"]').should('exist')
}

export function userIsLoggedOut() {
    cy.visit(domains.customer)
    cy.get('.user-button').click()
    cy.get('a[href="register"]').should('exist')
}

export function orderPlaced() {
    cy.visit(domains.customer + routes.orders)
    cy.get('.content .details').should('exist')
}
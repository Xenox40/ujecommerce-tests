// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import routes from '../consts/routes'

Cypress.Commands.add('login', (domain, email, pw) => {
    cy.visit(domain + routes.login);
    cy.get('#email').type(email);
    cy.get('#password').type(pw);
    cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('logout', (domain) => {
    cy.visit(domain);
    cy.get('.user-button').click();
    cy.get('button').contains('Logout').click();
});
import routes, { domains } from "../../../consts/routes";

export function placeOrder() {
    cy.visit(domains.customer + routes.cart);
    cy.wait(200);

    cy.get('button.alert-success').click();
}
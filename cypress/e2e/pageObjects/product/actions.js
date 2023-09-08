import { domains } from "../../../consts/routes";
import Product from "../../../models/Product";

export function addProductToCart(product = {}) {
    cy.visit(domains.customer);
    cy.wait(200);

    product = {
        ...(new Product()),
        ...product
    };

    if (product.name != "") {
        cy.get('.content .media').contains(product.name).first().click();
    }
    else {
        cy.get('.content .media').eq(product.id).click();
    }

    cy.get('.btn-primary').contains('Add to Cart').click();
}
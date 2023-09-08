export function fill(elements) {
    elements.forEach(element => {
        cy.get(element.selector).type(element.data);
    });
}
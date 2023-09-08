import UserRegister from "../../../models/UserRegister";
import { fill as fillForm } from "../../../utils/forms";
import routes, { domains } from "../../../consts/routes";

export function register(data = {}) {
    cy.visit(domains.customer + routes.register);
    cy.wait(1000);

    data = {
        ...(new UserRegister()),
        ...data
    };

    const selectors = {
        email: '#email',
        pass: '#password',
        confirmPass: '#confirmPassword'
    };

    fillForm([
        { selector: selectors.email, data: data.email },
        { selector: selectors.pass, data: data.pass },
        { selector: selectors.confirmPass, data: data.pass },
    ]);

    cy.get('button[type="submit"]').click();

    return data;
}
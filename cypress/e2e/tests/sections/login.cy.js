import { domains } from "../../../consts/routes"
import {
    userIsLoggedIn as assertUserIsLoggedIn,
    userIsLoggedOut as assertUserIsLoggedOut
} from "../../../utils/asserts"

describe('Login process tests', function() {
    before(() => {
        cy.fixture('customer.json').as('customer')
    })

    it('tests login process', function() {
        cy.login(domains.customer, this.customer.email, this.customer.pass)

        assertUserIsLoggedIn()
        cy.logout(domains.customer)
        assertUserIsLoggedOut()
    })
})
import routes, { domains } from "../../../consts/routes"
import { userIsLoggedIn as assertUserIsLoggedIn} from "../../../utils/asserts"
import { register as userRegister } from "../../pageObjects/register/crud"

describe('Register section tests', function() {
    it('registers a new user', function() {
        const userData = userRegister()

        cy.login(domains.customer, userData.email, userData.pass)
        cy.wait(200)

        assertUserIsLoggedIn()
    })
})
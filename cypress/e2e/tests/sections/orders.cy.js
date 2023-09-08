import { domains } from "../../../consts/routes"
import { placeOrder } from "../../pageObjects/cart/actions"
import {
    userIsLoggedIn as assertUserIsLoggedIn,
    userIsLoggedOut as assertUserIsLoggedOut,
    orderPlaced as assertOrderPlaced
} from "../../../utils/asserts"

import {
    addProductToCart
} from '../../pageObjects/product/actions'

describe('Orders section tests', function() {
    before(() => {
        cy.fixture('customer.json').as('customer').then((customer) => {
            cy.login(domains.customer, customer.email, customer.pass)
            assertUserIsLoggedIn()
        })
    })

    it('places an order', function() {
        addProductToCart()
        addProductToCart({ name: "Cyberpunk 2077" })
        addProductToCart({ id: 2 })

        placeOrder()
        cy.wait(200)

        assertOrderPlaced()
    })
})
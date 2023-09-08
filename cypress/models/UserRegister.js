import { faker } from '@faker-js/faker';

export default class UserRegister {
    constructor() {
        this.email = faker.internet.email();
        this.pass = faker.internet.password();
    }
}
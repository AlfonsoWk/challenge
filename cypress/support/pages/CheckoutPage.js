import CheckoutElements from "../elements/CheckoutElements";

class CheckoutPage {

    firstName(firstName){
        cy.get('[data-test="firstName"]').type(firstName);
    }

    lastName(lastName){
        cy.get('[data-test="lastName"]').type(lastName);
    }

    postalCode(postalCode){
        cy.get('[data-test="postalCode"]').type(postalCode);
    }
}

export default new CheckoutPage();
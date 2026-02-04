import CartElements from "../elements/CartElements";

class CartPage {
    goToCart() {
        cy.get('[data-test="shopping-cart-badge"]').click();
    }

    buyedItemIsInCart() {
        cy.get('.cart_item').should('have.length.greaterThan', 0);
    }
    
    goToCheckout() {
        cy.get('[data-test="checkout"]').click();
    }

    emptyCart(){
        cy.get('[data-test="shopping-cart-link"]').click();
    }

    verifyBuys(){
        cy.get('[data-test="inventory-item-name"]').should('contain.text', 'Backpack');
    }
}

export default new CartPage();
import ProductsElements from "../elements/ProductsElements";

class ProductsPage {

  addBackpackToCart() {
    cy.get(ProductsElements.backpackProduct()).click();
  }

  addBikeLightToCart() {
    cy.get(ProductsElements.bikeLightProduct()).click();
  }

}

export default new ProductsPage();

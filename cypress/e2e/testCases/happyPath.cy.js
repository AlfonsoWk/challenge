import LoginPage from "../../support/pages/LoginPage";
import ProductsPage from "../../support/pages/ProductsPage";
import CartPage from "../../support/pages/CartPage";
import CheckoutPage from "../../support/pages/CheckoutPage";
import 'cypress-mochawesome-reporter/register';


describe("Happy Path Test Cases", () => {
  it("1 - Login exitoso", () => {
        const userSaucedemo = {
      username: "standard_user",
      password: "secret_sauce",
    };
    LoginPage.navigateToLogin();
    LoginPage.login(userSaucedemo.username, userSaucedemo.password);
    LoginPage.verifyLoginSuccess();
  });

  it("2 - Añadir producto al carrito", () => {
    const userSaucedemo = {
      username: "standard_user",
      password: "secret_sauce",
    };
    LoginPage.navigateToLogin();
    LoginPage.login(userSaucedemo.username, userSaucedemo.password);
    LoginPage.verifyLoginSuccess();
    ProductsPage.addBackpackToCart();
    CartPage.goToCart();
  });

  it("3 - API Mercado Libre", () => {
  cy.request('GET', 'https://www.mercadolibre.com.ar/menu/departments')
    .then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('departments');
    });
});

});
import CartPage from "../../support/pages/CartPage";
import LoginPage from "../../support/pages/LoginPage";
import ProductsPage from "../../support/pages/ProductsPage";
import CheckoutPage from "../../support/pages/CheckoutPage";
import 'cypress-mochawesome-reporter/register';

describe("No happy Path Test Cases", () => {

  it("1 - Login con usuario bloqueado", () => {
        const userSaucedemo = {
      username: "locked_out_user",
      password: "secret_sauce",
    };
    LoginPage.navigateToLogin();
    LoginPage.login(userSaucedemo.username, userSaucedemo.password);
    LoginPage.verifyLoginError()
  });

  it("2 - Login con contraseña incorrecta", () => {
        const userSaucedemo = {
      username: "standard_user",
      password  : "1122",
    };
    LoginPage.navigateToLogin();        
    LoginPage.login(userSaucedemo.username, userSaucedemo.password);
    LoginPage.verifyInvalidCredentialsError();
  });

  it("3 - Falla al ingresar datos en Checkout", () => {
        const userSaucedemo = {
      username: "error_user", 
      password: "secret_sauce",   
    };
    LoginPage.navigateToLogin();
    LoginPage.login(userSaucedemo.username, userSaucedemo.password);
    ProductsPage.addBackpackToCart();
    CartPage.goToCart();
    CartPage.goToCheckout();
    const checkoutData = {
      firstName: "Juan",
      lastName: "Sanchez",
      postalCode: "12345"
    }
    CheckoutPage.firstName(checkoutData.firstName);
    CheckoutPage.lastName(checkoutData.lastName);
    CheckoutPage.postalCode(checkoutData.postalCode);   
  });

  it("4 - Falla en carro de compras vacío", () => {
        const userSaucedemo = {
      username: "standard_user",
      password: "secret_sauce",
    };
    LoginPage.navigateToLogin();
    LoginPage.login(userSaucedemo.username, userSaucedemo.password);
    LoginPage.verifyLoginSuccess();
    ProductsPage.addBikeLightToCart();
    CartPage.goToCart();
    CartPage.verifyBuys();
    

  });
});
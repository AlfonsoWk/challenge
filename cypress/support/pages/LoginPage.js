import LoginElements from '../elements/LoginElements';

class LoginPage {
  navigateToLogin() {
    cy.visit('/');
  }

  login(username, password) {
    cy.get(LoginElements.usernameInput()).type(username);
    cy.get(LoginElements.passwordInput()).type(password);
    cy.get(LoginElements.loginButton()).click();
  }

  verifyLoginSuccess() {
    cy.url().should('include', '/inventory.html');
    cy.get('.inventory_list').should('be.visible');
  }

  verifyLoginError() {
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Epic sadface: Sorry, this user has been locked out.');
  }

  verifyInvalidCredentialsError() {
  cy.get('[data-test="error"]') 
    .should('be.visible')
    .and('contain.text','Username and password do not match any user in this service');
}

}

export default new LoginPage();

/// <reference types="cypress"/>

import BasePage from "./BasePage";

export default class AuthenticationPage extends BasePage {
  // Selectors
  #heading = ".page-heading";
  #subheading = "#create-account_form > .page-subheading";
  #emailLabel = "#create-account_form > .form_content > .form-group > label";
  #emailTextField = "#email_create";
  #createAccountButton = "#SubmitCreate > span";
  #createAccountError = "#create_account_error";

  // Getters
  get heading() {
    return cy.get(this.#heading);
  }
  get subheading() {
    return cy.get(this.#subheading);
  }
  get emailLabel() {
    return cy.get(this.#emailLabel);
  }
  get emailTextField() {
    return cy.get(this.#emailTextField);
  }
  get createAccountButton() {
    return cy.get(this.#createAccountButton);
  }
  get createAccountError() {
    return cy.get(this.#createAccountError);
  }

  // Actions

  validateCreateAccountFormElements() {
    this.heading
      .should("have.text", "Authentication")
      .should("have.css", "text-transform", "uppercase");
  }
  fillCreateAccountForm(emailAddress) {
    this.emailTextField.clear().type(emailAddress);
  }

  clickCreateAnAccount() {
    this.createAccountButton.click();
  }

  validateCreateAccountError(errorText) {
    this.createAccountError
      .scrollIntoView()
      .should("include.text", `${errorText}`);
  }
}

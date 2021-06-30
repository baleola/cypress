/// <reference types="cypress"/>

import BasePage from "./BasePage";

export default class CreateAccountPage extends BasePage {
  // Selectors
  #mrRadioButton = "#uniform-id_gender1";
  #mrsRadioButton = "#uniform-id_gender2";
  #firstNameTextField = "#customer_firstname";
  #lastNameTextField = "#customer_lastname";
  #emailTextField = "#email";
  #passwordTextField = "#passwd";
  #dobDay = "#days";
  #dobMonth = "#months";
  #dobYear = "#years";
  #newsletterCheckbox = "#newsletter";
  #offersOptInCheckbox = "#optin";
  #addressFirstName = "#firstname";
  #addressLastName = "#lastname";
  #addressCompany = "#company";
  #addressLineOne = "#address1";
  #addressLineTwo = "#address2";
  #addressCity = "#city";
  #addressState = "#id_state";
  #addressPostCode = "#postcode";
  #addressCountry = "#id_country";
  #additionalInfoTextField = "#other";
  #homePhoneTextField = "#phone";
  #mobilePhoneTextField = "#phone_mobile";
  #addressAlias = "#alias";
  #registerButton = "#submitAccount > span";
  #createAccountForm = "#account-creation_form";

  // Getters
  get mrRadioButton() {
    return cy.get(this.#mrRadioButton);
  }
  get mrsRadioButton() {
    return cy.get(this.#mrsRadioButton);
  }
  get firstNameTextField() {
    return cy.get(this.#firstNameTextField);
  }
  get lastNameTextField() {
    return cy.get(this.#lastNameTextField);
  }
  get emailTextField() {
    return cy.get(this.#emailTextField);
  }
  get passwordTextField() {
    return cy.get(this.#passwordTextField);
  }
  get dobDay() {
    return cy.get(this.#dobDay);
  }
  get dobMonth() {
    return cy.get(this.#dobMonth);
  }
  get dobYear() {
    return cy.get(this.#dobYear);
  }
  get newsletterCheckbox() {
    return cy.get(this.#newsletterCheckbox);
  }
  get offersOptInCheckbox() {
    return cy.get(this.#offersOptInCheckbox);
  }
  get addressFirstName() {
    return cy.get(this.#addressFirstName);
  }
  get addressLastName() {
    return cy.get(this.#addressLastName);
  }
  get addressCompany() {
    return cy.get(this.#addressCompany);
  }
  get addressLineOne() {
    return cy.get(this.#addressLineOne);
  }
  get addressLineTwo() {
    return cy.get(this.#addressLineTwo);
  }
  get addressCity() {
    return cy.get(this.#addressCity);
  }
  get addressState() {
    return cy.get(this.#addressState);
  }
  get addressPostCode() {
    return cy.get(this.#addressPostCode);
  }
  get addressCountry() {
    return cy.get(this.#addressCountry);
  }
  get additionalInfoTextField() {
    return cy.get(this.#additionalInfoTextField);
  }
  get homePhoneTextField() {
    return cy.get(this.#homePhoneTextField);
  }
  get mobilePhoneTextField() {
    return cy.get(this.#mobilePhoneTextField);
  }
  get addressAlias() {
    return cy.get(this.#addressAlias);
  }

  get registerButton() {
    return cy.get(this.#registerButton);
  }

  get createAccountForm() {
    return cy.get(this.#createAccountForm);
  }

  // Actions

  fillCreateAccountForm(userData) {
    this.firstNameTextField.clear().type(userData.firstName);
    this.lastNameTextField.clear().type(userData.lastName);
    this.passwordTextField.clear().type(userData.password);
    this.fillDob(userData);
    this.addressLineOne.clear().type(userData.addressOne);
    this.addressCity.clear().type(userData.city);
    this.addressState.select(userData.state);
    this.addressPostCode.clear().type(userData.postcode);
    this.mobilePhoneTextField.clear().type(userData.phone);
  }

  selectTitle(title) {
    //Options Mr or Mrs
    title.toLowerCase() === "mr"
      ? this.mrRadioButton.click()
      : this.mrsRadioButton.click();
  }

  fillDob(date) {
    this.dobDay.select(date.dobDay);
    this.dobMonth.select(date.dobMonth);
    this.dobYear.select(date.dobYear);
  }

  clickRegister() {
    this.registerButton.click();
  }
}

import BasePage from "./BasePage";

export default class MyAccountPage extends BasePage {
  #heading = ".heading";
  #accountWelcomeText = ".info-account";

  get heading() {
    return cy.get(this.#heading);
  }

  get accountWelcomeText() {
    return cy.get(this.#accountWelcomeText);
  }

  validateWelcomeText() {
    this.accountWelcomeText.should(
      "have.text",
      "Welcome to your account. Here you can manage all of your personal information and orders."
    );
  }
}

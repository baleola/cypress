import AuthenticationPage from "../pageObjects/AuthenticationPage";
import CreateAccountPage from "../pageObjects/CreateAccountPage";
import { errorTexts } from "../constants/errorTexts";
import { generateUserData } from "../utils/generateUserData";
import MyAccountPage from "../pageObjects/MyAccountPage";
import { users } from "../constants/users";

describe("Create Account Tests", () => {
  const userData = generateUserData();
  const authPage = new AuthenticationPage();
  const createAccountPage = new CreateAccountPage();
  const myAccountPage = new MyAccountPage();

  describe("Authentication Section", () => {
    beforeEach(() => {
      cy.intercept("POST", "/index.php").as("createAccount");
      cy.visit("/", { failOnStatusCode: false });
      authPage.clickSignIn();
      authPage.validateCreateAccountFormElements();
    });

    it("Should show error when empty email is submitted ", () => {
      authPage.emailTextField.clear();
      authPage.clickCreateAnAccount();
      cy.validateCreateAccountApiError(
        "@createAccount",
        errorTexts.INVALID_EMAIL
      );
      authPage.validateCreateAccountError(errorTexts.INVALID_EMAIL);
    });

    it("Should show error when an invalid email is submitted ", () => {
      authPage.fillCreateAccountForm(users.INVALID);
      authPage.clickCreateAnAccount();
      cy.validateCreateAccountApiError(
        "@createAccount",
        errorTexts.INVALID_EMAIL
      );
      authPage.validateCreateAccountError(errorTexts.INVALID_EMAIL);
    });

    it("Should show error when submitting a user email whcih already exists ", () => {
      authPage.fillCreateAccountForm(users.EXISTING);
      authPage.clickCreateAnAccount();
      cy.validateCreateAccountApiError(
        "@createAccount",
        errorTexts.EMAIL_EXISTS
      );
      authPage.validateCreateAccountError(errorTexts.EMAIL_EXISTS);
    });

    it("Should display create an account form when a valid email is submitted", () => {
      authPage.fillCreateAccountForm(userData.email);
      authPage.clickCreateAnAccount();
      cy.validateCreateAccountApiSuccess("@createAccount");
      cy.url().should(
        "eq",
        "http://automationpractice.com/index.php?controller=authentication&back=my-account#account-creation"
      );
    });
  });

  describe("Create Account Section", () => {
    beforeEach(() => {
      cy.intercept("POST", "/index.php").as("createAccount");
      cy.visit("/", { failOnStatusCode: false });
      authPage.clickSignIn();
      authPage.fillCreateAccountForm(userData.email);
      authPage.clickCreateAnAccount();
      cy.validateCreateAccountApiSuccess("@createAccount");
    });

    it("Should pre-fill create an account form with email address", () => {
      createAccountPage.emailTextField.should(
        "have.attr",
        "value",
        userData.email
      );
    });

    it("Should register sucessfully", () => {
      createAccountPage.selectTitle("Mr");
      createAccountPage.fillCreateAccountForm(userData);
      createAccountPage.clickRegister();
      cy.url().should(
        "eq",
        "http://automationpractice.com/index.php?controller=my-account"
      );
      myAccountPage.validateWelcomeText();
    });
  });
});

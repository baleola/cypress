/// <reference types="cypress"/>

export default class BasePage {
  // Selectors - Top Nav
  #topSaleBanner = ".row > a > .img-responsive";
  #contactPhoneNumber = ".shop-phone";
  #contactUsLink = "#contact-link > a";
  #signInLink = ".login";
  #logo = ".logo";
  #searchInput = "#search_query_top";
  #searchButton = "#searchbox > .btn";
  #shoppingCart = '[title="View my shopping cart"]';
  #womenNavLink =
    '.sf-menu > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]';
  #dressesNavLink = ".sf-menu > :nth-child(2) > .sf-with-ul";
  #tShirtsNavLink = ".sf-menu > :nth-child(3) > a";

  // Selectors - Footer
  #newsletterHeader = "#newsletter_block_left > h4";
  #newletterInput = "#newsletter-input";
  #socialHeader = "#social_block > h4";
  #facebookLink = ".facebook";
  #twitterLink = ".twitter";
  #youtubeLink = ".youtube";
  #googlePlusLink = ".google=plus";
  #categoriesFooter = ".blockcategories_footer";
  #inforomationFooter = "#block_various_links_footer";
  #myAccountFooter = ".row > :nth-child(7)";
  #storeInfoFooter = "#block_contact_infos > div";
  #copyright = ".bottom-footer > div";

  // Getters - Top Nav
  get topSaleBanner() {
    return cy.get(this.#topSaleBanner);
  }
  get contactPhoneNumber() {
    return cy.get(this.#contactPhoneNumber);
  }
  get contactUsLink() {
    return cy.get(this.#contactUsLink);
  }
  get signInLink() {
    return cy.get(this.#signInLink);
  }
  get logo() {
    return cy.get(this.#logo);
  }
  get searchInput() {
    return cy.get(this.#searchInput);
  }
  get searchButton() {
    return cy.get(this.#searchButton);
  }
  get shoppingCart() {
    return cy.get(this.#shoppingCart);
  }
  get womenNavLink() {
    return cy.get(this.#womenNavLink);
  }
  get dressesNavLink() {
    return cy.get(this.#dressesNavLink);
  }
  get tShirtsNavLink() {
    return cy.get(this.#tShirtsNavLink);
  }

  // Getters - Footer
  get newsletterHeader() {
    return cy.get(this.#newsletterHeader);
  }
  get newletterInput() {
    return cy.get(this.#newletterInput);
  }
  get socialHeader() {
    return cy.get(this.#socialHeader);
  }
  get facebookLink() {
    return cy.get(this.#facebookLink);
  }
  get twitterLink() {
    return cy.get(this.#twitterLink);
  }
  get youtubeLink() {
    return cy.get(this.#youtubeLink);
  }
  get googlePlusLink() {
    return cy.get(this.#googlePlusLink);
  }
  get categoriesFooter() {
    return cy.get(this.#categoriesFooter);
  }
  get inforomationFooter() {
    return cy.get(this.#inforomationFooter);
  }
  get myAccountFooter() {
    return cy.get(this.#myAccountFooter);
  }
  get storeInfoFooter() {
    return cy.get(this.#storeInfoFooter);
  }
  get copyright() {
    return cy.get(this.#copyright);
  }

  // Actions

  clickSignIn() {
    this.signInLink.click();
  }
}

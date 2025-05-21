/// <reference types="cypress" />

// Login and check it navigates to about page
const aboutIteration = () => {
  cy.visit('/')
  cy.get('.loginInput').type('MyCatBB1')
  cy.get('.passwordInput').type('Bbangchi1')
  cy.get('.loginButton').click()
  cy.window().then((win) => {
    win.localStorage.setItem('authToken', 'dummy-token'); //Input dummy-token into authToken in callback function
  })
  cy.visit('/home')
  cy.wait(500);
  cy.visit('/about')
  cy.wait(500)
  cy.url().should('include', '/about')
}

describe("Test About Page Functionality", () => {
  it("Login, move to about page and logout", () => {
    aboutIteration()
    cy.get(".Header__logOut").click();
  })
  it("Check all classes in about page", () => {
    aboutIteration()
    cy.get(".AboutPage")
    cy.get(".AboutPage__container")
    cy.get(".AboutPage__imageContainer")
    cy.get(".AboutPage__introductionImage")
    cy.get(".AboutPage__textContainer")
    cy.get(".Header__logOut").click()
  })
  it("Check mandatory texts", () => {
    aboutIteration()
    cy.contains("Name: BB(Bbangchi)")
    cy.contains("Birthday: December 21st, 2019")
    cy.contains("Hobby: Biting mom and dad")
    cy.contains("Strength: Overwhelming Adorableness")
    cy.contains("BB's Instagram")
    cy.get(".Header__logOut").click()
  })
  it("Check instagram", () => { // Cypress cannot test external page, so bypass it if there is a correct link
    aboutIteration();
    cy.get(".AboutPage__instagramLogo")
      .parent('a')
      .should('have.attr', 'href', 'https://www.instagram.com/bbbbangchiiii?igsh=MXQxZndta213bjFiNA==')
      .and('have.attr', 'target', '_blank')
  })
})
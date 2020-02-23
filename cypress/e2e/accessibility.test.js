/// <reference types="Cypress" />

describe("Accessibility tests", () => {
  beforeEach(() => {
    cy.visit("/")
      .get("main")
      .injectAxe()
  })
  it("Has no detectable accessibility violations on load", () => {
    cy.checkA11y()
  })
  it("Navigate to Writing page and check accessiblity", () => {
    cy.findByText(/writing/i)
      .click()
      .checkA11y()
  })
  it("Navigate to Projects page and check accessiblity", () => {
    cy.findByText(/projects/i)
      .click()
      .checkA11y()
  })
  it("Navigate to Contact page and check accessiblity", () => {
    cy.findByText(/contact/i)
      .click()
      .checkA11y()
  })
})

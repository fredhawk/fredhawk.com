/// <reference types="Cypress" />

describe("testing routes", () => {
  beforeEach(() => {
    cy.visit("/")
  })
  it("Navigate to Writing page and check", () => {
    cy.findByText(/writing/i)
      .click()
      .findByText(/writings/i)
      .should("exist")
  })
  it("Navigate to Projects page and check", () => {
    cy.findByText(/projects/i)
      .click()
      .findByText(/first/i)
      .should("exist")
  })
  it("Navigate to Contact page and check", () => {
    cy.findByText(/contact/i)
      .click()
      .findByLabelText(/your name:/i)
      .should("exist")
      .findByLabelText(/your email:/i)
      .should("exist")
      .findByLabelText(/message:/i)
      .should("exist")
      .findByText(/send/i)
      .should("exist")
  })
})

/// <reference types="Cypress" />

describe("Writing Page", () => {
  beforeEach(() => {
    cy.visit("/writing/")
  })
  it("Navigate to Writing page and check", () => {
    cy.findAllByText(/writings/i).should("exist")
  })
})

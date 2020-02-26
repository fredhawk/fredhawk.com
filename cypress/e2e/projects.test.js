/// <reference types="Cypress" />

describe("Project Page", () => {
  beforeEach(() => {
    cy.visit("/projects/")
  })
  it("Navigate to Projects page and check", () => {
    cy.findByText(/first/i).should("exist")
  })
})

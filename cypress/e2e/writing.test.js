/// <reference types="Cypress" />

describe("Writing Page", () => {
  beforeEach(() => {
    cy.visit("/writing/")
  })
  it("Navigate to Writing page and check so page works.", () => {
    cy.findAllByText(/writings/i).should("exist")
  })
  it("Should have at least three posts", () => {
    cy.findAllByTestId("writing").should("have.length.gte", 3)
  })
})

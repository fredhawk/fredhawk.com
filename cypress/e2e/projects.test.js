/// <reference types="Cypress" />

describe("Project Page", () => {
  beforeEach(() => {
    cy.visit("/projects/")
  })
  it("Navigate to Projects page and check", () => {
    cy.findAllByText(/projects/i).should("exist")
  })
  it("Find four projects listed", () => {
    cy.findAllByTestId("project").should("be", 4)
  })
})

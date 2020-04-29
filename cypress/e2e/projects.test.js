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
  it("Should have a Budget Bears project", () => {
    cy.findAllByText(/budget bears/i).should("exist")
  })
  it("Should have a Bookfinder project", () => {
    cy.findAllByText(/bookfinder/i).should("exist")
  })
  it("Should have a Blue Candlenut project", () => {
    cy.findAllByText(/blue candlenut/i).should("exist")
  })
  it("Should have a Resume Bears project", () => {
    cy.findAllByText(/resume bears/i).should("exist")
  })
})

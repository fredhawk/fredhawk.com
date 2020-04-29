/// <reference types="Cypress" />

describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/")
  })
  it("should find a text that says Recent Posts on the home page.", () => {
    cy.findAllByText(/recent posts/i).should("exist")
  })
  it("Should have at least three posts", () => {
    cy.findAllByTestId("post").should("have.length", 3)
  })
})

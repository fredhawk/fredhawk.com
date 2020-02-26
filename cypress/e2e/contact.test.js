/// <reference types="Cypress" />

describe("Contact Page", () => {
  beforeEach(() => {
    cy.visit("/contact/")
  })
  it("Navigate to Contact page and check", () => {
    cy.findByLabelText(/your name:/i)
      .should("exist")
      .findByLabelText(/your email:/i)
      .should("exist")
      .findByLabelText(/message:/i)
      .should("exist")
      .findByText(/send/i)
      .should("exist")
  })
  it("Fill in the form and send it", () => {
    // Look into JSTesting with Kent on this.
    const formdata = {
      name: "Fred Flintstone",
      email: "test@test.com",
      message: "Testing the form.",
    }

    // Stub out a cy.server
    // Stub out a cy.route for api route '/'
    // Fill in the form and submit.
    cy.findByLabelText(/your name:/i)
      .type(formdata.name)
      .findByLabelText(/your email:/i)
      .type(formdata.email)
      .findByLabelText(/message:/i)
      .type(formdata.message)
      .findByText(/send/i)
      .click()
    // Check so the response is ok.
    // Test for error messages.
  })
})

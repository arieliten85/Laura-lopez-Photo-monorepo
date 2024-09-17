describe("FooterSection Component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
    cy.wait(1000);
    cy.scrollTo("bottom");
  });

  it("should display the social media links correctly", function () {
    cy.get('[data-test="footer-column-social"]').should("be.visible");

    cy.get('[data-test="footer-link-instagram"]')
      .should("have.attr", "href", "https://www.instagram.com/")
      .find(".footer__social-icon")
      .should("be.visible");

    cy.get('[data-test="footer-link-facebook"]')
      .should("have.attr", "href", "https://www.facebook.com/")
      .find(".footer__social-icon")
      .should("be.visible");

    cy.get('[data-test="footer-link-whatsapp"]')
      .should("have.attr", "href", "https://wa.me/54988888888")
      .find(".footer__social-icon")
      .should("be.visible");
  });

  it("should display the accessibility link correctly", function () {
    cy.get('[data-test="footer-column-accessibility"]').should("be.visible");

    cy.get('[data-test="footer-link-map"]')
      .should(
        "have.attr",
        "href",
        "https://www.google.com/maps/@-32.8832975,-68.8791187,14z?hl=es&entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
      )
      .find(".footer__icon")
      .should("be.visible");
  });

  it("should display the contact information correctly", function () {
    cy.get('[data-test="footer-column-contact"]').should("be.visible");

    cy.get('[data-test="footer-column-contact"]')
      .contains("Tel: +54-15-888-888")
      .should("be.visible");

    cy.get('[data-test="footer-column-contact"]')
      .contains("Lun - Vie: 09:00 AM - 19:00 PM")
      .should("be.visible");
  });

  it("should display the footer bottom with the copyright text", function () {
    cy.get('[data-test="footer-bottom"]')
      .should("be.visible")
      .find(".footer__copy-text")
      .should(
        "contain.text",
        "Copyright © 2024. Todos los derechos reservados. Creado por AriDev"
      );
  });
});

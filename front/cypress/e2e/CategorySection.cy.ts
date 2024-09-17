import CategoryImageSection from "../fixtures/categoryImageSection.json";

describe("ImageCategoryFilter Component", () => {
  const BASE_URL = "http://localhost:5173";

  beforeEach(() => {
    cy.visit(BASE_URL);
  });

  it("should render the gallery container correctly", () => {
    cy.scrollTo(0, 1200);
    cy.get('[data-test="gallery-container"]').should("be.visible");
  });

  it("should display each category image correctly", () => {
    cy.scrollTo(0, 1200);

    cy.get('[data-test^="category-item-"]').each((categoryItem, index) => {
      cy.wrap(categoryItem)
        .find('[data-test^="category-media-"]')
        .should("be.visible")
        .and(($img) => {
          const src = $img.attr("src");
          expect(src).to.match(/img01\.avif|img01\.jpg$/);
        });
    });
  });

  it("should have the correct link for each category", () => {
    cy.scrollTo(0, 1200);

    cy.get('[data-test^="category-item-"]').each((categoryItem, index) => {
      cy.wrap(categoryItem)
        .find("a")
        .should("have.attr", "href")
        .and("include", CategoryImageSection[index].path.toLowerCase());
    });
  });

  it("should display the correct title for each category", () => {
    cy.scrollTo(0, 1200);

    cy.get('[data-test^="category-item-"]').each((categoryItem, index) => {
      cy.wrap(categoryItem)
        .find('[data-test^="category-title-"]')
        .should("contain.text", CategoryImageSection[index].title);
    });
  });

  it("should have consistent design for each card", () => {
    cy.scrollTo(0, 1200);

    cy.get(".category-section__card").each((card) => {
      cy.wrap(card).should("have.css", "border-radius", "4px");
      cy.wrap(card).should("have.css", "box-shadow").and("not.be.empty");
    });
  });

  it("should display correctly on different screen sizes", () => {
    const screenSizes = [320, 768, 1280];

    screenSizes.forEach((size) => {
      cy.viewport(size, 800);
      cy.scrollTo(0, 1200);
      cy.get('[data-test="gallery-container"]').should("be.visible");
      cy.get('[data-test^="category-item-"]').should(
        "have.length",
        CategoryImageSection.length
      );
    });
  });

  it("should load images efficiently on mobile screens", () => {
    cy.viewport(375, 667); // Tamaño de pantalla de un iPhone 6/7/8
    cy.scrollTo(0, 1200);

    cy.get('[data-test^="category-media-"]').each(($img) => {
      cy.wrap($img).should("have.attr", "src").and("not.be.empty");
      cy.wrap($img).should("be.visible");
    });
  });
});

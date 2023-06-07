describe("Emitter should be reachable from all contexts", () => {
  before(() => {
    cy.intercept("/project/settings").as("settings");
    cy.visit("http://127.0.0.1:8000");
    cy.wait(["@settings"]);
  });

  it("should find the Emitter from async, asyncify and async_from_sync contexts", () => {
    cy.get(".message").should("have.length", 3);

    cy.get(".message").eq(0).should("contain", "emitter from async found!");

    cy.get(".message").eq(1).should("contain", "emitter from asyncify found!");

    cy.get(".message")
      .eq(2)
      .should("contain", "emitter from async_from_sync found!");
  });
});

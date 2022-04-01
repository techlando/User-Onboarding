describe("Landonbook App", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })
 const textInput = () => cy.get("input[name=username]");
 const emailInput = () => cy.get("input[name=email]");
 const passwordInput = () => cy.get("input[name=password]");
 const submitInput = () => cy.get("input[name=submitbtn]");
 const foobarInput = () => cy.get("input[name=foobar]");

 it("Sanity check to make sure test work", () => {
     expect(1 + 2).to.equal(3);
     expect(2 + 2).not.to.equal(5);
     expect({}).not.to.equal({});
     expect({}).to.eql({});
 })

 it("proper elements are showing", () => {
     textInput().should("exist");
     foobarInput().should("not.exist");
     emailInput().should("exist");
     passwordInput().should("exist");
     submitInput().should("exist");

     cy.contains("Create a Friend").should("exist");
   
 })

 describe("Filling out the inputs", () => {
     it("can navigate to the site", () => {
         cy.url().should("include", "localhost");
     })
     it("can type in the inputs", () => {
         textInput().should("have.value", "").type("Lando Commando").should("have.value", "Lando Commando")
         emailInput().should("have.value", "").type("landonator30@gmail.com").should("have.value", "landonator30@gmail.com")
         
     })
 })
})
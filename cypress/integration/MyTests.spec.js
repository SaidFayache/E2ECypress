describe('Delivery SignUp Yassir', () => {
    it('Delivry Man SignUp Test', () => {

    cy.visit("https://express.yassir.com/");
    cy.get('body').should('contain','Devenez livreur');
    cy.contains('Devenez livreur').click({ waitForAnimations: false });
    cy.get('.fleet-leftfrm > .form-control').focus().type("TestFName");
    cy.get('.fleet-rightfrm > .form-control').focus().type("TestLName");
    var randInt = Math.floor(Math.random() * 1000);
    cy.get('.deliver-details > :nth-child(2) > .form-control').focus().type("mymailadress"+randInt+"@yopmail.com");
    var randPasInt = randInt + 100;
    cy.get(':nth-child(3) > .form-control').focus().type("MyPassword"+randPasInt);
    cy.get(':nth-child(4) > .form-control').focus().type("MyPassword"+randPasInt);
    cy.get(':nth-child(4) > .form-control').focus().type("MyPassword"+randPasInt);
    var telNumber = 25000000+ Math.floor(Math.random() * 999999); // generate a number 25xxxxxx
    cy.get('#tel').focus().type(telNumber);
    cy.get('#country').select("Tunisia");
    cy.get(':nth-child(7) > .form-control').select("Tunis");
    cy.get(':nth-child(8) > .form-control').select("velo");
    cy.get('.fleet-cont > .btn').click();
    // Test on Toast containing success message
    cy.get('.toast-message').should('contain','Driver Added Successfully');
})
})
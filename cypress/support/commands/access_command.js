Cypress.Commands.add('access', () =>{

//cy.mockWrongTest();
cy.visit('http://127.0.0.1:5500/index2.html');
cy.get('h2').contains('Pagamento com Cartão de Crédito');

});

Cypress.Commands.add('fillDataCards', () => {
  cy.get('[id="numero-cartao"]').type(1212121212121212121);

})

//TO-DO
 Cypress.Commands.add('mockWrongTest', () => {
    cy.intercept('GET', 'https://jsonplaceholder.typicode.com/users', {
      statusCode: 400,
      body: {
        message: 'Payment Method successfully changed',
      },
    }).as('mockSaveToBackend');
  });
  
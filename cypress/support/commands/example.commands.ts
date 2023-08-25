// Put all custom cy commands used throughout the tests here
// Command files should be named <name>.commands.ts
// It is highly recommended to keep the majority of test logic in commands
// Remember to add the command import to cypress/support/e2e.ts
// It is suggested to create subfolders to better organize command files

// Example:

// /* eslint-disable complexity */
// /* eslint-disable @typescript-eslint/no-namespace */
// /// <reference types="cypress" />
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       logIn(): Chainable<Response<any>>;
//        * place all commands here *
//     }
//   }
// }

// Cypress.Commands.add('logIn', () => {
//   cy.request({
//     method: 'POST',
//     url: '/api/login',
//     body: {
//       username: 'example username',
//       password: 'example password',
//     },
//   }).then((response) => {
//     window.localStorage.setItem('token', response.body.token);
//   });
// });

# Cypress-E2E-Test-Starter 

Welcome to `Cypress-E2E-Test-Starter`, your go-to boilerplate for kickstarting your end-to-end (E2E) test automation in both TypeScript and JavaScript with the powerful Cypress framework. Either integrate this repository in your application directory or keep it separate to run your e2e tests on their own.

## Table of Contents

- [Built With](#built-with)
- [Cypress Folder Structure](#cypress-folder-structure)
- [How to Implement Cypress-E2E-Test-Starter](#how-to-implement-cypress-e2e-test-starter)
- [DRY (Do not Repeat Yourself)](#dry-do-not-repeat-yourself)
- [Benefits of E2E Automation](#benefits-of-e2e-automation)
- [Why Cypress?](#why-cypress)
- [Cypress Best Practices](#cypress-best-practices)
  
## Built With

- Cypress
- TypeScript
- Prettier
- ESLint

## Cypress Folder Structure

<img width="265" alt="Cypress-Folder-Structure" src="https://github.com/Nicolas-Bolouri/Cypress-E2E-Test-Starter/assets/115577083/6b8f55f2-8695-4c03-988c-c2adecc7a32f">

## Boilerplate Details

The `e2e` folder contains all test files 
- Test files should be named `<name>.cy.ts`
- It is suggested to create subfolders to better organize test files

The `fixtures` folder contains all static data that are used in tests
- The `constants` folder contains a `contants.ts` file and a `functions.ts` file
    - `contants.ts` contains all constants used throughout the tests
    - `functions.ts` contains all helper functions that are not directly related to the tests
      
- The `enums` folder contains all enums used throughout the tests
    - Enum files should be named `<name>.enum.ts`
    - It is suggested to create subfolders to better organize enum files
      
- The `mock-data` folder contains all mock data used throughout the tests 
    - Mock data files should be named `mock-<name>.ts`
    - It is suggested to create subfolders to better organize mock data files
      
- The `models` folder contains all models for types used throughout the tests
    - Model files should be named `<name>.model.ts`
    - It is suggested to create subfolders to better organize model files
      
- The `selectors` folder contains all selectors for elements used throughout the tests 
    - Selector files should be named `<name>.selectors.ts`
    - Always select elements by data-cy attributes
    - Each selector variable should begin with the html or jsx/tsx file name it is used in
    - It is suggested to create subfolders to better organize selector files

The `support` folder contains everything that has to do with custom or important cypress plugins / commands
- The `commands` folder contains all custom cy commands used throughout the tests
    - Command files should be named `<name>.commands.ts`
    - It is highly recommended to keep the majority of test logic in commands
    - It is suggested to create subfolders to better organize command files

- The `e2e.ts` file contains all import of commands and plugins 

## How to Implement Cypress-E2E-Test-Starter 

1. **Clone the Repository**
    - Integrate the repo directly in your application directory or keep it separate.
    - This decision ultimately depends on how you choose to organize your test automation.

2. **Install Dependencies**
    ```bash
    npm install
    ```

4. **Configure**
    - Update the `cypress.json`, `prettierrc.ts`, `package.json`, and `eslintrc.json` with your project-specific configurations.
    - Add your base URLs, custom commands, or any environment variables if necessary.

5. **Writing Tests**
    - Navigate to `cypress/e2e` directory.
    - Write your tests. Make sure to look over the repo to ensure you follow the recommended structure.
      
6. **Run Tests**
    - To run tests in an interactive mode:
    ```bash
    npx cypress open
    ```

    - To run tests in a headless mode:
    ```bash
    npx cypress run
    ```

7. **Integrate with CI/CD** (optional)
   - Cypress is designed to be continuous integration (CI) friendly. Integrate it with your CI/CD pipelines for automated test runs on every push.

## DRY (Do not Repeat Yourself)

In Cypress, embracing the DRY (Do Not Repeat Yourself) principle ensures maintainable and efficient test code:

- **Constants**: Centralize frequently used values like URLs or timeout durations. Changing them becomes effortless.
- **Helper Functions**: Abstract repetitive or complex actions into functions, making tests cleaner.
- **Custom Cypress Commands**: Create custom `cy.<command>()` for repeated actions, simplifying the test flow.

Utilizing these approaches streamlines your test suite, making it easier to manage and adapt.


## Befinits of E2E Automation 

E2E testing automates the process of testing the flow of an application as a user would. Here's why this is essential:

- **User Perspective**: E2E tests ensure that the entire application is working correctly from a user's point of view.
- **Catch Critical Bugs**: It helps in identifying critical path issues before they reach production.
- **Time-Saving**: Manual testing, especially regression, is time-consuming. E2E automation helps in ensuring quick feedback.
- **Consistency**: Automated tests execute the same steps with precision every time they run.
- **Continuous Delivery**: With E2E tests, teams can confidently push code changes, ensuring robust continuous delivery pipelines.



## Why Cypress?

[Cypress](https://www.cypress.io/) is a next-gen E2E testing tool built for modern web applications. Here's what sets it apart:

- **Real-time Reloads**: Write tests and watch them run in real-time.
- **Time Travel**: With the "Time Travel" feature, see exactly what happened at each step of your test.
- **Debuggability**: Rich error messages help you understand why a test failed.
- **Automatic Waiting**: No more arbitrary waits or timeouts; Cypress automatically waits for DOM elements to appear.
- **Network Traffic Control**: Easily control, stub, and test edge cases without involving your server.



## Cypress Best Practices

- **Keep Tests Atomic**: Tests should be independent and should be able to run individually.
- **Use Data Attributes**: Use data attributes (e.g., `data-cy="submit-button"`) for selecting elements to make your tests resilient to changes.
- **Avoid Conditional Testing**: E2E tests should be deterministic. Avoid writing tests that have variable outcomes.
- **Limit Use of `cy.wait()`**: Instead of waiting for arbitrary time periods, use assertions to wait for elements or states.
- **Organize Tests**: Use `describe` and `it` blocks to group and label your tests effectively.
- **Clean Up**: If your tests create data or alter the application's state, ensure they clean up after themselves.


---


Contributions, feedback, or suggestions are highly appreciated! 

Happy Testing! 

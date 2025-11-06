# Swag Labs - E-commerce Test Automation

E-commerce Test Automation using Playwright + JavaScript for automated end-to-end testing of Swag Labs e-commerce website.

![Playwright Tests](https://github.com/pedinistar/Swag-Labs-Playwright-Project/actions/workflows/playwright.yml/badge.svg)

## Project Overview

This project demonstrates comprehensive test automation coverage for an e-commerce platform, including user authentication, product browsing, cart management, and checkout processes.

**Application Under Test:** [Swag Labs](https://www.saucedemo.com/)

## Features

- **Custom Fixtures** - Reusable authenticated page fixture for efficient test execution
- **Helper Functions** - Modular cart operations for code reusability
- **Comprehensive Coverage** - 13 test cases covering critical user journeys
- **Page Object Pattern** - Maintainable test structure with locator strategies
- **Cross-functional Testing** - Login, Product, Cart, Checkout, and Logout flows

## Test Scenarios Covered

### Login Module (3 tests)
- TC01: Successful login with valid credentials
- TC02: Error handling for invalid username
- TC03: Error handling for invalid password

### Product Module (3 tests)
- TC05: Display all products after login
- TC06: Add product to cart
- TC07: Remove product from cart

### Cart Module (1 test)
- TC08: Display cart with added items

### Checkout Module (3 tests)
- TC09-10-12: Complete checkout with valid information
- TC11: Error validation for missing required fields

### Logout Module (1 test)
- TC13: Logout and redirect to login page

**[View Detailed Test Scenarios](https://docs.google.com/spreadsheets/d/1Dq1wpHjiq5MIPl735KScn-3yuw611shIxn1POJVCydo/edit?usp=sharing)**

## Tech Stack

- **Framework:** Playwright
- **Language:** JavaScript
- **Test Runner:** Playwright Test
- **Design Pattern:** Custom Fixtures & Helper Functions
- **Version Control:** Git & GitHub

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/pedinistar/Swag-Labs-Playwright-Project.git
cd Swag-Labs-Playwright-Project
```

2. Install dependencies
```bash
npm install
```

3. Install Playwright browsers
```bash
npx playwright install
```

### Running Tests

```bash
# Run all tests
npx playwright test

# Run tests in headed mode
npx playwright test --headed

# Run tests in UI mode
npx playwright test --ui

# Generate HTML report
npx playwright show-report
```

## Test Execution Reports

After running tests, view the HTML report:
```bash
npx playwright show-report
```

## Key Learnings

- Implemented custom fixtures for authentication state management
- Created reusable helper functions for common test operations
- Practiced data-driven testing approaches
- Applied proper locator strategies for robust element selection
- Implemented comprehensive assertion patterns

## Test Credentials

```
Username: standard_user
Password: secret_sauce
```

## Links

- **Application:** [Swag Labs Demo](https://www.saucedemo.com/)
- **Playwright Documentation:** [playwright.dev](https://playwright.dev/)
- **Test Scenarios Sheet:** [Google Sheets](https://docs.google.com/spreadsheets/d/1Dq1wpHjiq5MIPl735KScn-3yuw611shIxn1POJVCydo/edit?usp=sharing)

## Author

**Pedini Jayashree**
- LinkedIn: [linkedin.com/in/jayashree14/](https://www.linkedin.com/in/jayashree14/)
- GitHub: [@pedinistar](https://github.com/pedinistar)

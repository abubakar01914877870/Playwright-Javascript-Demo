# Playwright JavaScript Test Automation Project

## Overview
This project demonstrates automated testing using Playwright with JavaScript. It showcases various testing capabilities and best practices for web automation.

## Project Structure
```
├── tests/
│   └── example.spec.js
├── playwright.config.js
└── README.md
```

## Prerequisites
- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)

## Setup Instructions
1. Clone the repository
2. Install dependencies:
```bash
npm install
```

## Running Tests
To run all tests:
```bash
npx playwright test
```

To run tests in UI mode:
```bash
npx playwright test --ui
```

## Visual Testing
This project includes visual testing capabilities using Playwright's built-in snapshot feature.

### Taking Screenshots
```bash
npx playwright test --update-snapshots
```

### Visual Comparison
The tests automatically compare the current state of UI components against their baseline screenshots. If there are visual differences, the test will:
- Generate a diff image highlighting the changes
- Save both the expected and actual screenshots
- Fail the test with detailed information about the differences

### Visual Test Examples
```javascript
// Example of a visual test
await expect(page).toHaveScreenshot('homepage.png');
await expect(component).toHaveScreenshot('button-state.png');
```

## Test Reports
View HTML test report:
```bash
npx playwright show-report
```

## Environment Variables
- `BASE_URL`: Base URL for the application under test

## Author
[Your Name]

## License
This project is licensed under the MIT License.

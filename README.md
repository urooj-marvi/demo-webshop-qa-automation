# Demo Web Shop Automation (Playwright)

# Overview
Part 1: Test Automation (E2E purchase flow using Playwright)
Part 2: Manual Test Cases (20 + positive, negative, boundary & accessibility scenarios)
Part 3: Regression Testing Strategy (document and approach)
Target Application https://demowebshop.tricentis.com/

# Tools, Environment, and Versions
| Tool                  | Version                   | Purpose                    |
| --------------------- | ------------------------- | -------------------------- |
| **Node.js**           | ≥ 18.x                    | Runtime environment        |
| **Playwright**        | ^1.48                     | Automation framework       |
| **TypeScript**        | ^5.x                      | Strongly-typed scripting   |
| **VS Code / Any IDE** | Latest                    | Code editing and debugging |
| **Browsers**          | Chromium, Firefox, WebKit | Cross-browser validation   |
Operating System: Tested on Windows 10 
Language: TypeScript (Node.js)

# Setup Instructions
1. Clone and Open the Project
  git clone <your_repo_url>
  cd demowebshop-automation
2. Install Dependencies
  npm install
3.  Install Playwright Browsers
  npx playwright install
4. Run the Test Suite
npm test

# Part 1 Automated Test Scenarios (E2E Purchase Flow)
Objective
Automate the complete online purchase flow from registration to order confirmation.
Test Steps

1. Open the demo website
2. Register a new user with a unique email and password
3. Login with newly created credentials
4. Navigate to Computers → Notebooks → 14.1-inch Laptop
5. Add product to cart and verify cart badge shows correct quantity
6. Proceed to checkout
7. Fill billing & shipping details with dummy data
8. Select shipping and payment methods
9. Confirm the order
10. Validate “Thank you” page and capture Order Number

# Required Assertions Implemented

| Assertion                | Description                                       |
| ------------------------ | ------------------------------------------------- |
| Product Name Consistency | Same product name across PDP → Cart → Checkout    |
| Price Consistency        | Price verified across product, cart, and checkout |
| Cart Quantity Check      | Correct item count displayed after adding product |
| Address Accuracy         | Address shown on confirmation matches input data  |
| Valid Order Number       | Order number extracted and validated using regex  |
| “Thank You” Page         | Confirmation page displays correct message        |

# Quality Standards Followed

| Category                   | Implementation                                    |
| -------------------------- | ------------------------------------------------- |
| **Framework Architecture** | Page Object Model (POM) for modularity            |
| **Stability**              | Auto-waiting for UI elements (no hard waits)      |
| **Observability**          | Screenshots, video recording, trace files enabled |
| **Code Quality**           | Clean, commented, maintainable TypeScript code    |
| **Data-Driven Testing**    | User data read from JSON file for multiple runs   |
| **Cross-Browser Testing**  | Tests run on Chromium and Firefox                 |
| **Reusability**            | Separate reusable page classes for each component |

# Test Data Management
Test users stored in test-data/users.json
Two unique datasets used for data-driven execution:
[
{
"email": "abc123@gmail.com"
"password": "abc@123"
}
{
"email": "ab@gmail.com",
"password": "abc@12345"
}
]

# Artifacts and Logs
| Artifact        | Location                            | Description         |
| --------------- | ----------------------------------- | ------------------- |
| **HTML Report** | `playwright-report/`                | Detailed run report |
| **Screenshots** | Saved automatically on test failure |                     |
| **Videos**      | Retained on failure                 |                     |
| **Trace Files** | Retained on failure for debugging   |                     |

# Assumptions & Limitations

Demo Web Shop is a public demo site, so data resets may occur.
Shipping and payment steps are static; no real payment integration.
Tests assume network stability and consistent product availability.
Execution environment must support Playwright browsers (Chromium/Firefox).

# Part 2 — Manual Test Cases
# Objective
Design 20 + comprehensive manual test cases covering positive, negative, boundary, compatibility, and accessibility scenarios.
# TestCase Format 
| Field                   | Example                                            |
| ----------------------- | -------------------------------------------------- |
| **Test ID**             | TC_001_Registration_ValidInput                     |
| **Objective**           | Verify user can register successfully              |
| **Priority**            | P0                                                 |
| **Type**                | Functional / UI                                    |
| **Prerequisites**       | Browser open on homepage                           |
| **Test Data**           | Valid user details                                 |
| **Steps**               | 1. Navigate → Register → Enter valid data → Submit |
| **Expected Result**     | Success message and redirect to home page          |
| **Acceptance Criteria** | Registration should succeed without errors         |

# Coverage Summary
| Category          | Example Scenarios                           |
| ----------------- | ------------------------------------------- |
| **Positive**      | Valid registration, checkout, payment       |
| **Negative**      | Invalid email, empty password, expired card |
| **Boundary**      | Field length limits, quantity limits        |
| **Cross-Browser** | Chrome, Firefox, Edge validation            |
| **Accessibility** | Tab navigation, alt text, color contrast    |

**All manual test cases are included in:
Manual Test Cases.csv**

# Part 3 — Regression Testing Strategy
 # Objective

Define a clear and risk-based approach to regression testing for the Demo Web Shop application.
1. Risk Assessment Matrix
2. Test Selection Strategy
3. Execution Framework
   **Part 3 Regression Testing Strategy.docx**

  # Evaluation Highlights
| Focus Area               |    Demonstrated Capability                           |
| ------------------------ | ---------------------------------------------------- |
| **Technical Competency** | Playwright automation with POM & data-driven testing |
| **Scenario Coverage**    | 20 + manual cases + full E2E automated flow          |
| **Code Quality**         | Modular, commented, maintainable code                |
| **Testing Strategy**     | Structured regression plan with risk matrix          |
| **Documentation**        | Comprehensive README & supporting files              |


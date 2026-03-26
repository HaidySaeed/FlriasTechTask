# FlriasTechTask

# 📱 Appium Automation Project

##  Overview

This project is an automated testing framework built using **Appium** for mobile application testing.
It covers end-to-end scenarios such as browsing products, adding items to the cart, and validating user flows.

---

##  Project Structure

```
appiumTask/
│
├── pages/              # Page Object Model classes
│   ├── homeScreen.ts
│   ├── productPage.ts
│   └── cartPage.ts
│
├── test/
│   └── specs/          # Test cases
│       └── homeScreen.spec.ts
│
├── utils/              # Helper functions (if any)
├── config/             # Appium / WebdriverIO configs
├── package.json
└── README.md
```

---

##  Tech Stack

* Appium
* WebdriverIO
* TypeScript
* Node.js

---

##  How to Run the Project
1. Clone the repository
git clone https://github.com/HaidySaeed/FlriasTechTask.git
cd FlriasTechTask
2. Install dependencies
npm install
3. Run tests
npx wdio run wdio.conf.ts


 Features Covered:
Home screen validation
Product selection
Add to cart functionality
Basic UI validations

 Notes

.Make sure Appium server is running before executing tests
.Ensure emulator or real device is connected

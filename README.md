# Applied JavaScript Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **Applied JavaScript**. During this sprint, you studied **DOM and components**. In your challenge this week, you will demonstrate your mastery of these skills by creating **an online Lambda newspaper**.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge.

## Project Set Up

- [x] Fork and clone the repo. Delete your old fork from Github first if you are repeating this Unit.
- [x] Open the assignment in Canvas and click on the "Set up git" option.
- [x] Follow instructions to set up Codegrade's Webhook and Deploy Key.
- [x] Push your first commit: `git commit --allow-empty -m "first commit" && git push`.
- [x] Check to see that Codegrade has accepted your git submission.

For a step-by-step on setting up Codegrade see [this guide.](https://www.notion.so/lambdaschool/Submitting-an-assignment-via-Code-Grade-A-Step-by-Step-Walkthrough-07bd65f5f8364e709ecb5064735ce374)

## Project Instructions

### Introduction

You are going to create a Lambda Newspaper. Your job is going to be to create the components that make up the newspaper's home page.

In meeting the minimum viable product (MVP) specifications listed below, your project should look similar to the image linked below:

[Lambda Times](https://tk-assets.lambdaschool.com/cac4803c-6e8f-4846-be0e-b20d82a34a73_lambda-times.png)

### Instructions

- [x] Navigate to the root of the project with your command line.
- [x] Run `npm install` to download the dependencies listed in the `package.json` file.
- [x] Run `npm start` to compile the project and serve it.
- [x] Navigate Chrome to `http://localhost:3000`
- [x] In a separate terminal, run `npm test` to run tests.

**Steps Required for MVP:**

- [x] Steps 1 and 2 are explained inside the `src/components/header.js` file.
- [x] Steps 3 and 4 are explained inside the `src/components/tabs.js` file.
- [x] Steps 5 and 6 are explained inside the `src/components/card.js` file.

**Important Notes:**

- Please **do not move or rename existing files** or folders.
- If your development server stops "auto reloading", manually kill it with `CTRL+C` and restart it.
- Do not change the `package.json` file except to install libraries with NPM (Axios is _already_ in the `package.json`).
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review, refine, and polish your work, including spell-checking and grammar-checking.
- It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Submission format

- [x] Submit via Codegrade by committing and pushing any new changes.
- [x] Create a pull request to merge `<firstName-lastName>` branch into `main`.
- [x] Please don't merge your own pull request and make sure **you are on your own repo**.
- [x] Check Codegrade for automated feedback.
- [x] Check Codegrade in the days following the Sprint Challenge for reviewer feedback.
- [x] Any changes pushed after the deadline will not receive any feedback.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. What is the DOM?

   - The DOM is the "Document Object Model". It is a model/representation of our page that we can use to allow us to dynamically add new content or update the styling of our final site, programmatically. It's a language-independent API, acting like a middle-man/bridge, that gives us a way to change the content of our site without actually (permanently) altering any original HTML "skeletons" for pages we initially set up.

2. What is an event?

   - In code, an "event" is quite literally "something that occurs," just like in plain English. Nearly any action our users perform will be considered an event, and we can use these events to trigger code-execution when we want our site to respond to user (or program) actions.

3. What is an event listener?

   - An "event listener" is a thing that sits and waits until it "hears" an event it is assigned to "listen" for. When it "hears" that event, it will run code it was assigned to execute when the event it's listening for is triggered.

4. Why would we convert a NodeList into an Array?

   - Converting a NodeList into an Array allows us to perform array methods on it, which gives us more options in terms of data transformation/manipulation (such as access to methods like .map() and .filter(), for example) that we would otherwise not be able to use if we left it as-is.

5. What is a component?

   - A component is a reusable block of code that allows us to quickly manufacture a desired product based on criteria assigned to its manufacturing instructions. We can use them in web development to pre-define structured markup with content that gets automatically filled in to allow for the easy, dynamic creation of things like cards to populate a news feed, or elements of a user's profile page that get adjusted based on the user's information and styling we provide that page with.

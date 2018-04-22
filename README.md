# refactionjs
Refactoring exercise for Node

## Getting started for applicants

Fork this repository to clean up the code and put it in a sensible structure, using the best of idiomatic ES and modern libraries/frameworks possible. The application runs correctly, but there's a lot of duplication and tangling of concerns, and its filtering is limited.

To run:
```
npm install
npm start
```

Browse to [http://localhost:3000](http://localhost:3000)

## Important - the requirements

* The code must run in the latest 8.x version of Node
* The code must be able to be built and run with npm commands - no extra scripts or tools that can't be run from what's in `package.json`
* You are welcome to introduce any libraries you feel are useful, but these must run on Windows, Mac, and Linux

## Guidance

There is no "right answer", but some good things to do might be:
* Separate concerns: untangle business logic, web serving, and data access
* Use React + Redux, or some other single page app framework to avoid having to make page reloads and to generalise the filtering system (e.g. so you can select all people who are both male and 20 years old)
* Use ES6+ features (only the ones available in Node 8.x) to improve the readability, scoping, reuse of the code
* Introduce a module bundler e.g Webpack along with a transpiler to take advantage of even more modern ES features
* Improve the configurability by replacing hardcoded values with appropriate mechanisms for specifying them
* Introduce a linter
* Improve error handling
* Add useful comments
* Add some CSS styling
* Add logging

## Once you're done

Create a pull request back into this repository and describe, in as much detail as you feel necessary, what you have done to improve this project. Include your full name in the title as it appears on your CV so we can match it back to your job application. We'll take it from there and review. Show us what you can do!
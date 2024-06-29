# nested-callbacks-vs-chain-of-promises-vs-await-async-in-js
Example for nested callback functions vs chain of promises vs await-async in JS

# Asynchronous JavaScript Examples

This project demonstrates three different approaches to handling asynchronous operations in JavaScript: nested callbacks, promise chaining, and async/await syntax.

## Files

1. nestedCallbacks.js: Demonstrates the nested callbacks approach.
2. chainOfPromises.js: Shows the chain of promises method.
3. asyncAwait.js: Illustrates the async/await syntax.
4. README.md: This file, providing an overview and instructions.

## Prerequisites

- Node.js installed on your system

## Running the Examples

To run each example, use Node.js to execute the respective file:

bash
node nestedCallbacks.js
node chainOfPromises.js
node asyncAwait.js

# Description
Each example simulates fetching user data, then their posts, and finally the comments on the first post. The three different approaches accomplish the same task but showcase different asynchronous programming techniques in JavaScript.

# Nested Callbacks
This is the traditional way of handling asynchronous operations. Callbacks are nested within each other, which can lead to "callback hell" in more complex scenarios.

# Promise Chaining
Promises provide a more structured way to handle asynchronous operations. This example shows how to chain promises for a sequence of operations.

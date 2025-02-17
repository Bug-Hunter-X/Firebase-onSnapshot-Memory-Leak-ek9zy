# Firebase onSnapshot Memory Leak

This repository demonstrates a common error when using Firebase's `onSnapshot` method: forgetting to unsubscribe.  This can lead to memory leaks and performance issues, particularly in applications with substantial real-time data streams.

The `firebaseBug.js` file shows the problematic code.  The solution, found in `firebaseBugSolution.js`, highlights the importance of unsubscribing using the returned function from `onSnapshot` to prevent resource exhaustion.

## How to Reproduce

1. Clone the repository.
2. Install Firebase:
   ```bash
   npm install firebase
   ```
3. Configure your Firebase project (replace placeholders with your credentials). 
4. Run the `firebaseBug.js` file. Notice that the listener will continue to fire even after the main function has finished executing. 
5. Run the `firebaseBugSolution.js` file. Notice the listener is cleanly unsubscribed when it is no longer needed.
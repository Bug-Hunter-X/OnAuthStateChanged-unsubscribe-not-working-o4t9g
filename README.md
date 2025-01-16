# Firebase onAuthStateChanged Unsubscribe Issue

This repository demonstrates a common issue with Firebase's `onAuthStateChanged` listener: forgetting to unsubscribe, leading to potential memory leaks and unexpected behavior.  The `bug.js` file showcases the problem, while `bugSolution.js` provides the corrected implementation.

## Problem

The `onAuthStateChanged` listener continuously monitors authentication state changes.  If you don't unsubscribe using the returned function, the listener remains active even after it's no longer needed, potentially causing memory leaks and interfering with subsequent authentication operations.

## Solution

Always store the return value of `onAuthStateChanged` and call the unsubscribe function when it's no longer required, typically before component unmounts or when the authentication state is no longer relevant.
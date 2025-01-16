let unsubscribe;

const handleAuthStateChange = (user) => {
  if (user) {
    // User is signed in...
  } else {
    // User is signed out...
  }
};

const setupAuthListener = () => {
  unsubscribe = onAuthStateChanged(auth, handleAuthStateChange);
};

const cleanupAuthListener = () => {
  if (unsubscribe) {
    unsubscribe();
  }
};

// Call setupAuthListener when you need to start listening
setupAuthListener();

// Call cleanupAuthListener when you no longer need to listen
// For example, in a React component's componentWillUnmount lifecycle method
// or when the component is no longer in use
cleanupAuthListener();
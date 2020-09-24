import * as app from "firebase/app";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCFOnhN2qRQ7gbIcrpSg4e8Mpr6oAMcyHY",
  authDomain: "red-onion-food-online.firebaseapp.com",
  databaseURL: "https://red-onion-food-online.firebaseio.com",
  projectId: "red-onion-food-online",
  storageBucket: "red-onion-food-online.appspot.com",
  messagingSenderId: "1020436060935",
  appId: "1:1020436060935:web:c83aa35cbb741ecb7743a2"
};

export const initializeLoginFramework = () => {
  if (app.apps.length === 0) {
    app.initializeApp(firebaseConfig);
  }
}

export const signIn = (name, email, password) => {
  return app.auth().createUserWithEmailAndPassword(email, password)
    .then(response => {
      updateUser(name);
      return {
        name: name,
        email: email,
        loggedIn: true,
        error: ""
      }
    })
    .catch(error => {
      alert(error.message);
      return {
        loggedIn: false,
        error: error.message
      }
    });
}

const updateUser = name => {
  app.auth().currentUser.updateProfile({
    displayName: name
  });
}

export const loginUser = (email, password) => {
  return app.auth().signInWithEmailAndPassword(email, password)
    .then(res => {
      return {
        name: res.user.displayName,
        email: res.user.email,
        loggedIn: true,
        error: ""
      }
    })
    .catch(error => {
      alert(error.message);
      return {
        loggedIn: false,
        error: error.message
      }
    });
}

export const signOut = () => {
  app.auth().signOut();
}

export const getUserNameAndEmail = () => {
  const user = app.auth().currentUser;
  return [user.displayName, user.email];
}
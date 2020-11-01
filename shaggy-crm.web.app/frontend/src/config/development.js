const firebaseConfig = {
    apiKey: "AIzaSyASC7C3DO2YY6JOV__SJNyiUisnO-2OUc4",
    authDomain: "shaggy-crm.firebaseapp.com",
    databaseURL: "https://shaggy-crm.firebaseio.com",
    projectId: "shaggy-crm",
    storageBucket: "shaggy-crm.appspot.com",
    messagingSenderId: "292506108449",
    appId: "1:292506108449:web:c27fe290b6306173e61960",
    measurementId: "G-1DQWCC7Q7V"
};

// Cloud Functions
const backendUrl = `https://us-central1-${
  firebaseConfig.projectId
}.cloudfunctions.net/api/graphql`;

// App Engine
// const backendUrl = `<insert app engine url here>`;

export default {
  firebaseConfig,
  backendUrl,
};

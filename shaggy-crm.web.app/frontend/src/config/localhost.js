const firebaseConfig = {
    apiKey: "AIzaSyBKa4oOwWlKWkyl4eoU5i6auA47tgXt7EM",
    authDomain: "ineedshaggy.firebaseapp.com",
    databaseURL: "https://ineedshaggy.firebaseio.com",
    projectId: "ineedshaggy",
    storageBucket: "ineedshaggy.appspot.com",
    messagingSenderId: "7067000170",
    appId: "1:7067000170:web:252c35f5a8d9f22f45d913",
    measurementId: "G-01NRME0QNP"
}c;

// Cloud Functions
// const backendUrl = `http://localhost:5000/${
//   firebaseConfig.projectId
// }/us-central1/api/graphql`;

// App Engine / Debug
const backendUrl = `http://localhost:8080`;

export default {
  firebaseConfig,
  backendUrl,
};

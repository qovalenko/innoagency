import config from 'config';
import firebase from '@firebase/app';
import '@firebase/auth';

export default (store) => {
  if (process.env.NODE_ENV === 'test') {
    return;
  }

  firebase.initializeApp(config.firebaseConfig);
};

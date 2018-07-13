import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import config from '../../../server/shared/auth/config';

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export { auth };

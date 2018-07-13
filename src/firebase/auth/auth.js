import { auth } from './firebase';

export const createNewUser = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

export const signInUser = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

export const signOutUser = () =>
  auth.signOut();

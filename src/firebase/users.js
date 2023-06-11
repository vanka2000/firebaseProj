import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';
import { COLLECTIONS } from '../constants/firebase';

const createUserDocumentReference = (docId) => doc(db, COLLECTIONS.USERS, docId);

export const firebaseSignUp = async (data) => {
  try {
    const { email, password, name } = data;
    const documentData = { email, name };
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    const { uid = '' } = user;
    const documentReference = createUserDocumentReference(uid);
    await setDoc(documentReference, documentData);
    return { uid, documentData };
  } catch (error) {
    return error;
  }
};

export const firebaseSignIn = async (data, thunkAPI) => {
  try {
    const { email, password } = data;
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    const { uid = '' } = user;
    const documentReference = createUserDocumentReference(uid);
    const documentSnapshot = await getDoc(documentReference || null);
    const documentData = documentSnapshot.data();
    return { uid, documentData };
  } catch (error) {
    return error;
  }
};
export const authListener = (callback) => onAuthStateChanged(auth, callback);

export const getCurrentUser = () => auth.currentUser;

export const firebaseUpdateUser = async (data) => {
  try {
    const { uid } = getCurrentUser();
    const documentReference = createUserDocumentReference(uid);
    await updateDoc(documentReference, data);
    return data;
  } catch (error) {
    return error
  }
};

export const firebaseSetAuthUser = async (data) => {
  try {
    const { uid } = data;
    const documentReference = createUserDocumentReference(uid);
    const documentSnapshot = await getDoc(documentReference || null);
    const documentData = documentSnapshot.data();
    return { uid, documentData };
  } catch (error) {
    return error
  }
};


export const firebaseSignOut = () => signOut(auth);

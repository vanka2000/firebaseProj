import { collection, addDoc } from "firebase/firestore";
import {db} from "../config/firebase";
import {COLLECTIONS} from "../constants/firebase";

export const createApplication = async (data) => {
  const docRef = await addDoc(collection(db, COLLECTIONS.APPLICATIONS), data);
  return docRef
}


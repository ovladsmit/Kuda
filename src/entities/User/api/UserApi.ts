/** Слушатель событий  */
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "shared/api/firebase";

export const subscribeToAuthChanges = (callback: (user: any) => void) => {
  return onAuthStateChanged(auth, (firebaseUser) => {
    callback(firebaseUser ? { id: firebaseUser.uid, email: firebaseUser.email } : null);
  });
};
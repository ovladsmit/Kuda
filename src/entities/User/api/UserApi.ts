import { onAuthStateChanged } from "firebase/auth";
import { auth } from "shared/api/firebase";
import { User } from "../model/types/user";

export const subscribeToAuthChanges = (
  callback: (user: User | null) => void,
) => {
  return onAuthStateChanged(auth, (firebaseUser) => {
    callback(
      firebaseUser
        ? { id: firebaseUser.uid, username: firebaseUser.email ?? "" }
        : null,
    );
  });
};

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const [isLoading, setIsLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    console.log("Log Out");
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        // An error
      });
  };

  return {
    user,
    setUser,
    signInWithGoogle,
    isLoading,
    logOut,
  };
};

export default useFirebase;

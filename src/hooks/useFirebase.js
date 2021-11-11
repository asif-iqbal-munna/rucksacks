import { useEffect, useState } from "react";
import firebaseInitialize from "../pages/authentication/firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import axios from "axios";

firebaseInitialize();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const auth = getAuth();
  const createUser = (email, password, name, history) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setError("");
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {
            setError(error.message);
          });
        alert("Your Registration is successful");
        saveUser(name, email);
        history.push("/");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };

  const userSignIn = (email, password, history, location) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const redirectURI = location?.state?.from || "/";
        history.push(redirectURI);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    setLoading(true);
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setError("");
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  const userSignOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {})
      .catch((error) => {})
      .finally(() => setLoading(false));
  };

  const saveUser = (name, email) => {
    const user = { displayName: name, email };
    axios
      .post("http://localhost:8000/users", user)
      .then((res) => console.log(res));
  };

  return {
    user,
    error,
    createUser,
    userSignIn,
    userSignOut,
    loading,
    setError,
  };
};

export default useFirebase;

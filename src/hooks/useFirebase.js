import { useEffect, useState } from "react";
import firebaseInitialize from "../pages/authentication/firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  getIdToken,
} from "firebase/auth";
import axios from "axios";
import Swal from "sweetalert2";

firebaseInitialize();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState("");

  const auth = getAuth();
  const createUser = (email, password, name, history) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        Swal.fire({
          title: "Success!",
          text: "You Have Successfully Registered!",
          icon: "success",
          confirmButtonText: "Ok",
        });
        setError("");
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {
            setError(error.message);
          });
        saveUser(name, email);
        history.push("/");
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Ok",
        });
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };

  const userSignIn = (email, password, history, location) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        Swal.fire({
          title: "Success!",
          text: "You Have Successfully logged in!",
          icon: "success",
          confirmButtonText: "Ok",
        });
        const redirectURI = location?.state?.from || "/";
        history.push(redirectURI);

        setError("");
      })
      .catch((error) => {
        setError(error.message);
        Swal.fire({
          title: "Error!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Ok",
        });
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    setLoading(true);
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setError("");
        getIdToken(user).then((idToken) => {
          setToken(idToken);
        });
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  useEffect(() => {
    axios
      .get(`https://safe-depths-81486.herokuapp.com/users/${user.email}`)
      .then((res) => {
        setAdmin(res.data.admin);
      });
  }, [user.email]);

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
      .post("https://safe-depths-81486.herokuapp.com/users", user)
      .then((res) => res);
  };

  return {
    user,
    error,
    createUser,
    userSignIn,
    userSignOut,
    loading,
    token,
    admin,
    setError,
  };
};

export default useFirebase;

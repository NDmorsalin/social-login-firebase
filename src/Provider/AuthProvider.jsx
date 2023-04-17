import React, { createContext, useContext, useEffect, useState } from "react";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  OAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
const auth = getAuth(app);

const AuthContext = createContext();

const useAuth = () => {
  const authInfo = useContext(AuthContext);
  return authInfo;
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  const singInByEmail = (email ,password) => {

    return signInWithEmailAndPassword(auth, email, password)
  };
  const registerByEmail = (email ,password) => {
return createUserWithEmailAndPassword(auth, email, password)
  };
  /* login with facebook start */
  const providerFb = new FacebookAuthProvider();
  const singInByFb = () => {
    return signInWithPopup(auth, providerFb);
  };
  /* login with facebook end */

  /* login with twitter start */
  const providerTwitter = new TwitterAuthProvider();
  const singInByTwitter = () => {
    return signInWithPopup(auth, providerTwitter);
  };
  /* login with twitter end */

  /* login with Github start */
  const providerGithub = new GithubAuthProvider();
  const singInByGithub = () => {
    return signInWithPopup(auth, providerGithub);
  };
  /* login with twitter end */

  /* login with Github start */
  const providerMS = new OAuthProvider("microsoft.com");
  const singInByMS = () => {
    return signInWithPopup(auth, providerMS);
  };
  /* login with twitter end */

  /* logout start */
  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        setError(error.message);
      });
  };
  /* logout end */
  const authInfo = {
    user,
    singInByFb,
    logOut,
    loading,
    error,
    setError,
    singInByTwitter,
    singInByGithub,
    singInByMS,
    singInByEmail,
    registerByEmail,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export { AuthContext, useAuth };
export default AuthProvider;

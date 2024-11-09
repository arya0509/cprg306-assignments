"use client";
 
import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "./firebase";
 
const AuthContext = createContext();
 
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
 
  const gitHubSignIn = () => {
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  };
 
  const firebaseSignOut = () => {
    return signOut(auth);
  };
 
  //useEffect hook to listen to the auth state changes
  //when the user logs in or logs out, the auth state changes
  //the useEffect hook will run the callback function which will update the user state
    useEffect(() => {
    //current user is the user object
    //unsubscribe is a function that will stop listening to the auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [user]);
 
  return (
    //pass the user, gitHubSignIn, and firebaseSignOut functions to the value prop
    <AuthContext.Provider value={ {user, gitHubSignIn, firebaseSignOut} }>
      {children}
    </AuthContext.Provider>
  );
};
 
export const useUserAuth = () => {
  return useContext(AuthContext);
};
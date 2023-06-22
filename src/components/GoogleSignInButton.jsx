import React from "react";
import firebase from "../firebaseConfig";
import "firebase/auth";
import { useNavigate } from "react-router-dom";

const GoogleSignInButton = ({ className, style }) => {
  const navigate = useNavigate();
  const handleSignInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    try {
      const result = await firebase.auth().signInWithPopup(provider);

      // Handle the signed-in user (create an account or log in existing user)
      const { user } = result;
      console.log("Signed in with Google:", user);
      if (user) {
        navigate("/dashboard");
      }
      // Handle further actions based on user data
    } catch (error) {
      console.log("Error signing in with Google:", error.message);
      // Handle error case
    }
  };

  return (
    <button
      className={`flex items-center justify-center bg-white rounded-lg px-4 py-2 gap-2 ${className}`}
      style={{
        background: "#FFFFFF",
        borderRadius: "10px",
        ...style,
      }}
      onClick={handleSignInWithGoogle}
    >
      <img src="/assets/google.svg" />
      <span className="text-xs text-gray-600">Sign in with Google</span>
    </button>
  );
};

export default GoogleSignInButton;

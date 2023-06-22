import React, { useState } from "react";
import firebase from "../firebaseConfig";
import "firebase/auth";
import GoogleSignInButton from "../components/GoogleSignInButton";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      if (isSignUp) {
        // Sign up with email and password
        await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() => {
            console.log("Successfully Signed Up!");
            event.target.reset(); // Reset the form fields
            navigate("/dashboard");
          });
      } else {
        // Sign in with email and password
        await firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => {
            console.log("Successfully Signed In!");
            event.target.reset(); // Reset the form fields
            navigate("/dashboard");
          })
          .catch((error) => {
            console.log("Error signing in:", error.message);
            // alert("Invalid credentials. Please try again.");
          });
        // Sign-in successful, perform further actions if needed
      }
    } catch (error) {
      console.log("Error signing in/up:", error.message);
      // Handle error case
    }
  };

  const handleForgotPassword = async (event) => {
    event.preventDefault();

    const email = prompt("Please enter your email:");
    if (email) {
      try {
        await firebase.auth().sendPasswordResetEmail(email);
        alert(
          "Password reset email sent successfully. Please check your email inbox."
        );
      } catch (error) {
        console.log("Error sending password reset email:", error.message);
        alert("Failed to send password reset email. Please try again.");
      }
    }
  };

  const handleToggleMode = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-2/5 lg:h-screen bg-black">
        <div className="flex items-center justify-center h-full">
          <div className="text-white">
            <h1 className="font-bold text-6xl">Build.</h1>
          </div>
        </div>
      </div>
      <div className="lg:w-3/5 h-screen bg-gray-100">
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="font-bold text-3xl mb-6">
            {isSignUp ? "Sign Up" : "Sign In"}
          </h2>
          <p className="font-normal text-base mb-6">
            Sign {isSignUp ? "up" : "in"} to your account
          </p>
          <form onSubmit={handleFormSubmit} className="w-4/5 max-w-md">
            <div className="flex gap-4">
              <GoogleSignInButton />
              <button
                className="flex items-center justify-center bg-white rounded-lg px-4 py-2 ml-auto gap-2"
                style={{
                  background: "#FFFFFF",
                  borderRadius: "10px",
                }}
              >
                <img src="/assets/apple.svg" />
                <span className="text-xs text-gray-600">
                  Sign in with Apple
                </span>
              </button>
            </div>
            <div className="bg-white rounded-lg p-6 mt-6">
              <h3 className="font-normal text-base mb-2">Email address</h3>
              <div className="relative">
                <input
                  type="text"
                  name="email"
                  className="w-full h-full bg-gray-200 rounded-lg pl-4 py-2"
                  placeholder="johndoe@gmail.com"
                />
                <hr className="absolute left-0 w-full bottom-0 h-0.5 bg-gray-300" />
              </div>
              <h3 className="font-normal text-base my-4">Password</h3>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  className="w-full h-full bg-gray-200 rounded-lg pl-4 py-2"
                  placeholder="••••••••"
                />
                <hr className="absolute left-0 w-full bottom-0 h-0.5 bg-gray-300" />
              </div>
              {isSignUp ? (
                <button className="w-full bg-black text-white rounded-lg px-4 py-2 mt-4 hover:bg-transparent hover:text-black">
                  Sign Up
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-full bg-black text-white rounded-lg px-4 py-2 mt-4 hover:bg-transparent hover:text-black"
                >
                  Sign In
                </button>
              )}
              <p className="text-base text-blue-600 mt-4">
                <a href="#" onClick={handleForgotPassword}>
                  Forgot Password?
                </a>
              </p>
            </div>
            <p className="text-base text-gray-600 mt-6">
              {isSignUp
                ? "Already have an account? "
                : "Don't have an account? "}
              <a href="#" className="text-blue-600" onClick={handleToggleMode}>
                {isSignUp ? "Sign In" : "Register here"}
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;

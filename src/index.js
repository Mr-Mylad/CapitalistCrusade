// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase config
import firebaseConfig from "./firebaseConfig";

const app = initializeApp(firebaseConfig);

// My code

// Scroll Animator
import addScrollAnimator from "./scrollAnimator";
addScrollAnimator(document.querySelectorAll(".animated"));
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeUI } from "@firebase-oss/ui-core";

const firebaseConfig = {
  apiKey: "AIzaSyDsrdIyld8vqAzXNq7NY4hC0a3ZFOpcQtQ",
  authDomain: "fiap-bio.firebaseapp.com",
  projectId: "fiap-bio",
  storageBucket: "fiap-bio.firebasestorage.app",
  messagingSenderId: "34448202178",
  appId: "1:34448202178:web:63a05e91144dfb87c6de5b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const ui = initializeUI({
  app,
});

import React from "react";
import { initializeApp } from "firebase/app";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CartContextProvider } from "./context/CartContext";

const firebaseConfig = {
  apiKey: "AIzaSyB6U5uXRD_7NVbcXsN6cngJ-CG8oC6xJ0k",
  authDomain: "comision43180.firebaseapp.com",
  projectId: "comision43180",
  storageBucket: "comision43180.appspot.com",
  messagingSenderId: "735195268383",
  appId: "1:735195268383:web:47f7a187b3b4a12a0b9c2a",
  measurementId: "G-RY70MMZN96",
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

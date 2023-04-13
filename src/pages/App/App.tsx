import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import { initializeApp } from "firebase/app";

function App() {
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDXLG3jWgTCP7xzrYYA-AiE_gICoK4Fp9I",
    authDomain: "makeit-c2b12.firebaseapp.com",
    projectId: "makeit-c2b12",
    storageBucket: "makeit-c2b12.appspot.com",
    messagingSenderId: "1086535542396",
    appId: "1:1086535542396:web:b0d7ecb5bcb251558fcbf9",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

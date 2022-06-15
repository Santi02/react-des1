import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Navbar' ;
// import ' ./styles/styles.css' 

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDz3Ak07lt6312DzmzTKUcNAT-Ego8eNdA",
  authDomain: "primer-react-e7dea.firebaseapp.com",
  projectId: "primer-react-e7dea",
  storageBucket: "primer-react-e7dea.appspot.com",
  messagingSenderId: "647988935559",
  appId: "1:647988935559:web:f8d02b467f48dacfcb7122"
};

// Initialize Firebase
 initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root' ));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
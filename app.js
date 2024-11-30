import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword,
  signInWithPopup  } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";

// Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDSv5CbjoExdLk7sD63AEbBUhAvDh8gxKo",
    authDomain: "practice-website-ff76a.firebaseapp.com",
    projectId: "practice-website-ff76a",
    storageBucket: "practice-website-ff76a.firebasestorage.app",
    messagingSenderId: "422992192188",
    appId: "1:422992192188:web:5322806ddb8310207126b9",
    measurementId: "G-TQ75KNCHTL"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth();

// Sign-up function
function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Input validation
  if (!email || !password ) {
    Swal.fire('Please fill out all the fields.');
    return;
  }
  if (password.length < 6) {
    Swal.fire('Password should be at least 6 characters long.');
    return;
  }

  // Firebase Authentication
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('User signed up:', user);

      // Display success message
      Swal.fire({
        position: "center",
        icon: "success",
        title: "User Successfully Created",
        showConfirmButton: false,
        timer: 1500
      });
      //window.location.pathname=''
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error signing up:', errorCode, errorMessage);

      // Display user-friendly error message
      Swal.fire({
        icon: 'error',
        title: 'Sign-Up Failed',
        text: errorMessage
      });
    });
}
// Attach event listener to button
document.getElementById('submit-btn').addEventListener('click', signup);

// function signin() {
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     console.log(email, password)
  
//     // Check if both fields are filled
//     if (email === '' || password === '') {
//       alert('Please fill out both email and password fields.');
//       return;
//     }
  
//     signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in 
//       const user = userCredential.user;
//       console.log('Signed in successfully: ', user)
//       alert('Logged in...')
//       sessionStorage.setItem("user", user.accessToken);
//       window.location.pathname = ''
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(error)
//     });
//   }
  
//   document.getElementById('login-btn')?.addEventListener('click', signin);
  
//   const provider = new GoogleAuthProvider();
  
//   function signinWithGoogle() {
//     signInWithPopup(auth, provider)
//     .then((result) => {
//       // This gives you a Google Access Token. You can use it to access the Google API.
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;
//       // The signed-in user info.
//       const user = result.user;
//       console.log(user)
//       window.location.pathname = 'quiz.html'
//       sessionStorage.setItem('user', token)
//       // IdP data available using getAdditionalUserInfo(result)
//       // ...
//     }).catch((error) => {
//       // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // The email of the user's account used.
//       const email = error.customData.email;
//       // The AuthCredential type that was used.
//       const credential = GoogleAuthProvider.credentialFromError(error);
//       console.log(error)
//       // ...
//     });
//   }
  
//   document.getElementById('google-btn')?.addEventListener('click', signinWithGoogle);
  
  
  
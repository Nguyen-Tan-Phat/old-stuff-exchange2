import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCNvlmMSJ-eIkfyt554iM-3zeNxG0pwXb8",
    authDomain: "old-stuff-echange.firebaseapp.com",
    projectId: "old-stuff-echange",
    storageBucket: "old-stuff-echange.appspot.com",
    messagingSenderId: "51114929113",
    appId: "1:51114929113:web:0443c0aa7c55e2f787c7c8",
    measurementId: "G-D47WGCFF7N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()

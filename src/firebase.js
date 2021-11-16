 // Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app"
 import { getFirestore} from "firebase/firestore"
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyCETT0iFK_Lk3-CtHYU6LsyBVNZtVE5tg4",
   authDomain: "color-palette-81561.firebaseapp.com",
   projectId: "color-palette-81561",
   storageBucket: "color-palette-81561.appspot.com",
   messagingSenderId: "152657499384",
   appId: "1:152657499384:web:d1abec5a79e8448788d70d"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export default getFirestore();

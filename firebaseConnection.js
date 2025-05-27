import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDBPAK80x2oBSkB51Odu5V6HHY0Ux2MZMw",
  authDomain: "contateste-bbdaa.firebaseapp.com",
  projectId: "contateste-bbdaa",
  storageBucket: "contateste-bbdaa.firebasestorage.app",
  messagingSenderId: "72632388318",
  appId: "1:72632388318:web:77938b95aacdf70468104f",
  measurementId: "G-D3CEKVL4DM"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
import { getFirestore } from "firebase/firestore";
export const db = getFirestore(app);

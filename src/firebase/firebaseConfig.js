import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA25whbeAPSYwoQT2OPEUNvJEoMPDoqZ4c",
  authDomain: "auth-92aa6.firebaseapp.com",
  projectId: "auth-92aa6",
  storageBucket: "auth-92aa6.appspot.com",
  messagingSenderId: "477396592705",
  appId: "1:477396592705:web:a545dda9686f0106f93ec0"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app
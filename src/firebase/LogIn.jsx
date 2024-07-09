import React from "react";
import { GoogleAuthProvider} from "firebase/auth";
import {signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig"

export default function LogIn () {
    const handleGoogle = async (e) => {
        const provider = await new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }

    return (
        <div className="Navbar">
            <h1>Приветствует Андрей Копаев!</h1>
            <button onClick={handleGoogle}>
                Зарегистрироваться через Гугл (Диплом Синергия)
            </button>
        </div>
    )
}


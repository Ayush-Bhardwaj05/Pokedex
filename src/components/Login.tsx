import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { FaGoogle } from "react-icons/fa";
import { firebaseAuth, firebaseDB, usersRef } from "../utils/FirebaseConfig";
import { useAppDispatch } from "../app/hooks";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { setUserStatus } from "../app/slices/AppSlice";
function Login() {
  const dispatch = useAppDispatch();
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const {
      user: { email, uid },
    } = await signInWithPopup(firebaseAuth, provider);

    if (email) {
      const firestoreQuery = query(usersRef, where("uid", "==", uid));
      const fetchedUser = await getDocs(firestoreQuery);
      if (fetchedUser.docs.length === 0) {
        await addDoc(collection(firebaseDB, "users"), {
          uid,
          email,
        });
      }
      dispatch(setUserStatus({ email }));
    }
  };

  return (
    <div className="login">
      <button className="login-btn" onClick={handleLogin}>
        <FaGoogle />
        Login with Google
      </button>
    </div>
  );
}

export default Login;

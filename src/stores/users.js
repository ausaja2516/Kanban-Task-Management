import { ref } from "vue";
import { defineStore } from "pinia";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useRouter } from "vue-router";
import { doc, getFirestore, setDoc } from "firebase/firestore";

export const useUserStore = defineStore("Users", () => {
  const router = useRouter();
  const auth = getAuth();
  const db = getFirestore();
  const errMsg = ref("");

  // to get the display name
  const computedDisplayName = (user) => {
    const displayName = user.email.split("@")[0];
    user.displayName =
      displayName.charAt(0).toUpperCase() + displayName.slice(1);
  };

  // to store user into the users collection
  const storeUser = async (user) => {
    if (!user) {
      console.log("user credentail not found");
    }
    const userData = {
      email: user.email,
      displayName: user.displayName,
      createdAt: new Date().toISOString(),
    };

    await setDoc(doc(db, "Users", user.uid), userData);
  };

  // sigin user
  const signIn = async (email, pass) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        pass
      );

      const user = userCredential.user;

      computedDisplayName(user);

      // storeUser(user);

      router.push({ name: "dashboard" });
    } catch (e) {
      switch (e.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid email";
          break;
        case "auth/invalid-credential":
          errMsg.value = "Wrong password or account not found";
          break;
        case "auth/missing-password":
          errMsg.value = "Password field missing";
          break;
        default:
          errMsg.value = "An error occurred during registration";
          break;
      }
    }
  };

  // register user
  const registerUser = async (email, pass) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        pass
      );

      const user = userCredential.user;

      computedDisplayName(user);

      storeUser(user);

      router.push({ name: "dashboard" });
    } catch (e) {
      switch (e.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid email";
          break;
        case "auth/email-already-in-use":
          errMsg.value = "The provided email is already in use";
          break;
        case "auth/missing-password":
          errMsg.value = "Password field missing";
          break;
        case "auth/weak-password":
          errMsg.value = "Password is too weak";
          break;
        default:
          errMsg.value = "An error occurred during registration";
          break;
      }
    }
  };

  // google sigin
  const googleSignIn = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((data) => {
        router.push({ name: "dashboard" });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // logout user
  const logout = () => {
    signOut(auth, router.push({ name: "home" }));
  };

  return { signIn, registerUser, googleSignIn, logout, errMsg };
});

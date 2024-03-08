import * as React from 'react';
import * as Google from "expo-auth-session/providers/google";
import * as webBrowser from 'expo-web-browser';
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
} from "firebase/auth";
import { auth } from './firebaseConfig';
import GoogleSign from './Components/GoogleSign';

webBrowser.maybeCompleteAuthSession();

export default function App() {
  const [userInfo, setUserInfo] = React.useState();
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "911143679671-p7okgt2846la5570hr9nnvsitmt19n4l.apps.googleusercontent.com",
    webClientId: "798609166176-dhoo21bpsk6f0ubp83glcpehg68s8kdd.apps.googleusercontent.com",
    redirectUri: "http://localhost:8081",
  });

  React.useEffect(() => {
    const signInWithGoogle = async () => {
      if (response && response.type === "success" && response.params?.id_token) {
        try {
          const { id_token } = response.params;
          const credential = GoogleAuthProvider.credential(id_token);
          const userCredential = await signInWithCredential(auth, credential);
          const user = userCredential.user;
          console.log("Signed in as:", user.displayName);

          // Log the entire user object to the console
          console.log("User Object:", user);

          // You can setUserInfo or perform other actions with the user information
        } catch (error) {
          console.error("Error signing in:", error.message);
        }
      }
    };

    signInWithGoogle();
  }, [response]);

  return (
    <GoogleSign promptAsync={promptAsync} />
    // <Navigation />
  );
}

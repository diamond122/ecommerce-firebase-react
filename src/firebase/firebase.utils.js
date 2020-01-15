import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBpe1XV-OYUDt7gwincCyv3m93DxuClD0Y",
    authDomain: "manny-s-store.firebaseapp.com",
    databaseURL: "https://manny-s-store.firebaseio.com",
    projectId: "manny-s-store",
    storageBucket: "manny-s-store.appspot.com",
    messagingSenderId: "271314082099",
    appId: "1:271314082099:web:0caa3391d3011ab84d0646",
    measurementId: "G-8DK9KRSZHP"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
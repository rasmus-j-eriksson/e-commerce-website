import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCPP9tih-uUjOpJPagDAHO_duSLZF9uplg",
    authDomain: "crown-db-b66a0.firebaseapp.com",
    projectId: "crown-db-b66a0",
    storageBucket: "crown-db-b66a0.appspot.com",
    messagingSenderId: "325507463745",
    appId: "1:325507463745:web:0b5bef2ca4cc47e66e64c0",
    measurementId: "G-FZRB1N0ZZ1"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user ', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
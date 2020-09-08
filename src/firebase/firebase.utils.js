import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: 'AIzaSyC0Hxl-iDF9JP6QDvwicgXVXit8X3OKjVU',
    authDomain: 'blown-db.firebaseapp.com',
    databaseURL: 'https://blown-db.firebaseio.com',
    projectId: 'blown-db',
    storageBucket: 'blown-db.appspot.com',
    messagingSenderId: '830720699325',
    appId: '1:830720699325:web:a2c3b234812a56e0c580d4',
    measurementId: 'G-SF93YY1CX3',
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({
    prompt: 'select_account',
})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
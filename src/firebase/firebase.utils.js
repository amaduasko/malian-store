import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { api_info } from '../config'
const config = {
    apiKey: api_info.API_KEY || '',
    authDomain: api_info.AUTH_DOMAIN || '',
    databaseURL: api_info.DATABASE_URL || '',
    projectId: api_info.PROJECT_ID || '',
    storageBucket: api_info.STORAGE_BUCKET || '',
    messagingSenderId: api_info.MESSAGING_SENDER_ID || '',
    appId: api_info.APP_ID || '',
    measurementId: api_info.MEASUREMENT_ID || '',
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

export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd
) => {
    const collectionRef = firestore.collection(collectionKey)

    const batch = firestore.batch()

    objectsToAdd.forEach((obj) => {
        const newDocRef = collectionRef.doc()
        batch.set(newDocRef, obj)
    })

    return await batch.commit()
}

export const convertCollectionSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map((doc) => {
        const { title, items } = doc.data()

        return {
            id: doc.id,
            routeName: encodeURI(title.toLowerCase()),
            title,
            items,
        }
    })
    return transformedCollection.reduce((acc, collection) => {
        acc[collection.title.toLowerCase()] = collection
        return acc
    }, {})
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) =>{
        let unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe()
            resolve(userAuth)
        }, reject)
    })
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({
    prompt: 'select_account',
})

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export default firebase

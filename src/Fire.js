import firebase from 'firebase'

const config = {
  apiKey: process.env.RUS_FIREBASE_API_KEY,
  authDomain: process.env.RUS_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.RUS_FIREBASE_DATABASE_URL,
  storageBucket: process.env.RUS_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.RUS_FIREBASE_MESSAGING_SENDER_ID
}

export default fire = firebase.initializeApp(config)

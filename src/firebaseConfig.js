import { initializeApp } from 'firebase'

  // Initialize Firebase

  const app = initializeApp({
    apiKey: "AIzaSyBaY7Nzq-MVqpUtwOSEWXnGyaDopWe8gO4",
    authDomain: "soft-wisewed.firebaseapp.com",
    databaseURL: "https://soft-wisewed.firebaseio.com",
    projectId: "soft-wisewed",
    storageBucket: "soft-wisewed.appspot.com",
    messagingSenderId: "381874883266"
  });

  export const auth  = app.auth()
  export const db  = app.database()
  export const dbSuppliersRef = db.ref('supplier')
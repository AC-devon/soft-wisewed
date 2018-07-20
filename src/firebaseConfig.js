import Firebase from 'firebase'
var config = {
    apiKey: "AIzaSyCv3ZaODIeBTgAnsaKayWO-MdJVRQG4UKQ",
    authDomain: "pizza-planet-a3107.firebaseapp.com",
    databaseURL: "https://pizza-planet-a3107.firebaseio.com",
    projectId: "pizza-planet-a3107",
    storageBucket: "pizza-planet-a3107.appspot.com",
    messagingSenderId: "634782312980"
  };
  const firebaseApp = Firebase.initializeApp(config);
  const db  = firebaseApp.database()
  export const dbMenuRef = db.ref('menu')
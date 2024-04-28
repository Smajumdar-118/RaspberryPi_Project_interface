import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

const apiId = process.env.REACT_APP_API_ID;
const apiKey = process.env.REACT_APP_API_KEY;


const firebaseConfig = {
    "apiKey": apiKey,
    "authDomain": "raspberrypidata-3a619.firebaseapp.com",
    "projectId": "raspberrypidata-3a619",
    "databaseURL" : "https://raspberrypidata-3a619-default-rtdb.firebaseio.com/",
    "storageBucket": "raspberrypidata-3a619.appspot.com",
    "messagingSenderId": "717931168998",
    "appId": apiId,
    "measurementId": "G-0CF8B985MH"
};


firebase.initializeApp(firebaseConfig);

export default firebase;

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

const firebaseConfig = {
    "apiKey": "AIzaSyBoNyphp0cl_jxjD2ZR3gjcd3MY56zXbzY",
    "authDomain": "raspberrypidata-3a619.firebaseapp.com",
    "projectId": "raspberrypidata-3a619",
    "databaseURL" : "https://raspberrypidata-3a619-default-rtdb.firebaseio.com/",
    "storageBucket": "raspberrypidata-3a619.appspot.com",
    "messagingSenderId": "717931168998",
    "appId": "1:717931168998:web:f5b82f2e710ccc3a1ca727",
    "measurementId": "G-0CF8B985MH"
};


firebase.initializeApp(firebaseConfig);

export default firebase;

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCYmLBcIMRmeCBbPyaXqvYOjhZR5h6vvDY',
	authDomain: 'sql-demos-1d750.firebaseapp.com',
	projectId: 'sql-demos-1d750',
	storageBucket: 'sql-demos-1d750.appspot.com',
	messagingSenderId: '662749292633',
	appId: '1:662749292633:web:b1abeeb863eef4e8382948',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();

export { db, googleAuthProvider, githubAuthProvider, firebase };

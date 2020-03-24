import Firebase from 'firebase/app'
var firebaseConfig = {
    apiKey: "AIzaSyA698dY7FHMRks7MYU226oxEFyraMtw6I",
    authDomain: "support-your-local-dealer.firebaseapp.com",
    databaseURL: "https://support-your-local-dealer.firebaseio.com",
    projectId: "support-your-local-dealer",
    storageBucket: "support-your-local-dealer.appspot.com",
    messagingSenderId: "596359913429",
    appId: "1:596359913429:web:c0de592c15aa4d059ca75c"
  };
export const App = Firebase.initializeApp(firebaseConfig);
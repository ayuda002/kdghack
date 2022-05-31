var db = firebase.firestore();

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        const user_mail = user.email
        const displayName = user.displayName;
        console.log(user_mail);
        db.collection("users").doc(user_mail).set({
            name:displayName,
            country: "日本",
        })
    } 
  });

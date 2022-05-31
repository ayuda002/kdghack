var db = firebase.firestore();

$("#japan").click(function(){
    db.collection("users").doc("ayudai@gmail.com").set({
        name: "日本",
      })
})

$("#US").click(function(){
    db.collection("users").doc("ayudai").set({
        name: "アメリカ",
      })
    
})

db.collection('users').where("name", "==", '日本').get().then(snap => {
  size = snap.size // will return the collection size
  console.log(size)
});

db.collection("users").where("name", "==", 'japan')
      .get()
      .then(() => {
         console.log(1)
      })
      .catch( (error) => {
         console.log(`データの取得に失敗しました (${error})`);
      });


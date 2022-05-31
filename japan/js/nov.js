var db = firebase.firestore();
var emotion;
var emotion2;
var R=0;
const G=0;
var B=0;

function showClock1() {
    let now = new Date();
  
    var Year = now.getFullYear();
    var Month = now.getMonth() + 1;
    var Date1 = now.getDate();
    var Hour = now.getHours();
    var Min = now.getMinutes();
    var Sec = now.getSeconds();
  
    var target = document.getElementById("DateTimeDisp");
    target.innerHTML =
      Year + "年" + Month + "月" + Date1 + "日" + Hour + ":" + Min + ":" + Sec;

    db.collection("users")
      .where("country", "==", "日本")
      .get()
      .then((snap) => {
        const size = snap.size; // will return the collection size
        var nop = size + "人";
        document.getElementById("japan").innerHTML = nop;
        console.log(nop);
  　　});
  　db.collection("score").doc("8Joohb3Ci4vZe78amjSw").get().then((snap) => {
    emotion = snap.data().japan_score;
    console.log(emotion)
    document.getElementById("japan_emo").innerHTML = emotion;
　　});
db.collection("score").doc("lmxHJhtMrs2EBrQvdgc4").get().then((snap) => {
  emotion2 = snap.data().america_score;
  console.log(emotion2)
  document.getElementById("US_emo").innerHTML = emotion2;
　　});
  if(emotion < 0){
    B = 180+(75*emotion);
    console.log(R)
    R=0
  }
  else{
    R = 180+(75*emotion);
    console.log(B)
    B=0
  }

   var obj = document.getElementById("color");
   obj.style.color = "rgb("+R+","+G+"," +B+")";
  
  }
  setInterval('showClock1()', 1000);
  
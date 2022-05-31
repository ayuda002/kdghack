const ui = new firebaseui.auth.AuthUI(firebase.auth());
const uiConfig = {
callbacks: {
  signInSuccessWithAuthResult: function(authResult, redirectUrl) {
    return true;
  },
},
signInFlow: 'popup',
signInSuccessUrl: 'start.html',
signInOptions: [
  firebase.auth.GoogleAuthProvider.PROVIDER_ID,
],
tosUrl: 'sample01.html',
privacyPolicyUrl: 'auth-sample01.html'
};

ui.start('#auth', uiConfig);

function link(){
  // リンク名変更
  location.href='https://storage.googleapis.com/kdghacks-team-e.appspot.com/main/start.html';
}

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    setTimeout("link()", 3000);
      const signOutMessage = `
      <div class="text-center mt-5 container">
      <h1><span class="ns_font">Hello<\/span>, ${user.displayName}!<\/h1>
      <h2 class="ns_font">We'll be moving into the hall shortly!<\/h2>
      <button type="button" class="btn btn-info mt-3" onClick="signOut()"><h3 class="ns_font">sign out<\/h3><\/button>
      <\/div>
      `;
      document.getElementById('auth').innerHTML =  signOutMessage;
      console.log('ログインしていますよーーー');
  } 
});

function signOut() {
firebase.auth().onAuthStateChanged(user => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log('ログアウトしました');
      location.reload();
    })
    .catch((error) => {
      console.log(`ログアウト時にエラーが発生しました (${error})`);
    });
});
}
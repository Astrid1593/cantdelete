const firebaseConfig = {
    apiKey: "AIzaSyCjeJ-rUV-AehIRJb_qAmlnD_dvaERfGYc",
    authDomain: "c94-practise-activity.firebaseapp.com",
    databaseURL: "https://c94-practise-activity-default-rtdb.firebaseio.com",
    projectId: "c94-practise-activity",
    storageBucket: "c94-practise-activity.appspot.com",
    messagingSenderId: "1013961294357",
    appId: "1:1013961294357:web:172e9a7540ea462637c41c"
  };
firebase.initializeApp(firebaseConfig);
var username = "";
function login(){
    username = document.getElementById("loginNameInput").value;
    localStorage.setItem("User name", username);
    console.log("New user: " + username);
    if(username == ""){
        document.getElementById("emptyInputWarning").innerHTML = "Please enter a name!";
    } else{
        window.location = "newroom.html";
    }
}
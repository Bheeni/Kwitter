var firebaseConfig = {
      apiKey: "AIzaSyCPbPEKISOFs4Yxv13xpY0992PogpIvzNw",
      authDomain: "kwitter-app-708b2.firebaseapp.com",
      databaseURL: "https://kwitter-app-708b2-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-708b2",
      storageBucket: "kwitter-app-708b2.appspot.com",
      messagingSenderId: "1024329862333",
      appId: "1:1024329862333:web:123bca21da8b03bb31bbd4",
      measurementId: "G-RVHT0EBGG3"
    };
    
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout_user(){
      localStorage.removeItem("name");
      localStorage.removeItem("ROOM_NAME");
      window.location= "index.html";
}

function send(){
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      like:0,
      message:msg,
      user_name:user_name
})

document.getElementById("msg").value = "";

}
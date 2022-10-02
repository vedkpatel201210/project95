var username =  localStorage.getItem("user_name");
window.document.getElementById("userName").innerHTML = "Welcome "+username;

const firebaseConfig = {
  apiKey: "AIzaSyAc3g5G8EMpd4bdRxsuXPJkhwblSxU7t2w",
  authDomain: "project-kwitter-7b076.firebaseapp.com",
  databaseURL: "https://project-kwitter-7b076-default-rtdb.firebaseio.com",
  projectId: "project-kwitter-7b076",
  storageBucket: "project-kwitter-7b076.appspot.com",
  messagingSenderId: "614406556012",
  appId: "1:614406556012:web:e9e15e08c970a48dadcb49",
  measurementId: "G-PZTH4Y311S"
};

firebase.initializeApp(firebaseConfig);

function addRoom(){
    var room_name = window.document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({purpose: "adding room"});
    getData();
}

function getData() {
  document.getElementById("output").innerHTML = "";
  var row = "";
    firebase.database().ref("/").on('value',
      function(snapshot) 
      {
        
        snapshot.forEach(function(childSnapshot) 
          {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            row = row + "<div class='room_name' id='"+Room_names+"' onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
            //End code
          });
          document.getElementById("output").innerHTML = row;
      });
      
}
function redirectToRoomName(id){
  localStorage.setItem("room_name", id);

  window.location = "kwitter_page.html";
}
 
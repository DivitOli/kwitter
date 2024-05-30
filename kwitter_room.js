var firebaseConfig = {
      apiKey: "AIzaSyCDlUExyCa0V3hRUKr03VAJp_hqFLpWt_s",
      authDomain: "c43-project-3ad67.firebaseapp.com",
      databaseURL: "https://c43-project-3ad67-default-rtdb.firebaseio.com",
      projectId: "c43-project-3ad67",
      storageBucket: "c43-project-3ad67.appspot.com",
      messagingSenderId: "50409561871",
      appId: "1:50409561871:web:b1bdadb9b5b1e1716da87a",
      measurementId: "G-4KEX3PGV0L"
    };
    firebase.initializeApp(firebaseConfig);

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpose : "To add room name"
      })

      localStorage.setItem("room_name", room_name)

      window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();
function redirectToRoomName(name){
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
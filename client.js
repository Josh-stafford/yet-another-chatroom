var socket;
socket = io.connect('http://localhost:2222');

msgIter = false;
name = "";

socket.on('newMessage', function(data){
  msgIter = !msgIter;
  area = document.getElementById('messages');

  area.innerHTML = area.innerHTML + '<div id=msg_' + msgIter.toString() +  '> ' + data[0] + ": " + data[1];
  scrollObj =document.getElementById("msgArea");
  scrollObj.scrollTop = scrollObj.scrollHeight;
})

console.log('working');

function sendMessage(){
  msgIter = !msgIter;
  msg = document.getElementById("msgInput");

  area = document.getElementById('messages');
  message = [name, msg.value];


  area.innerHTML = area.innerHTML + '<div id=msg_' + msgIter.toString() +  '> ' + message[0] + ": " + message[1];
  scrollObj =document.getElementById("msgArea");
  scrollObj.scrollTop = scrollObj.scrollHeight;

  socket.emit('message', message);
  msg.value = "";
}

function setUsername(){

  name = document.getElementById("nameBox").value;
  document.getElementById("sidebar").style.display = "initial";
  document.getElementById("chatArea").style.display = "initial";
  document.getElementById("startTitle").style.display = "none";
  document.getElementById("nameBox").style.display = "none";

}

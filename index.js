var onlineMsgContainer = document.getElementById('online-message-container');
var offlineMsgContainer = document.getElementById('offline-message-container');

var onlineMsgContainerArray = document.querySelectorAll('#online-message-container span');
var offlineMsgContainerArray = document.querySelectorAll('#offline-message-container span');

var randomArrayIndex = Math.floor(Math.random() * onlineMsgContainerArray.length);
var tempIndex = randomArrayIndex;

function displayOnlineMsg(){
    onlineMsgContainerArray[randomArrayIndex].style.display = 'block';
}
displayOnlineMsg();

function onlineOfflineToggle(){
    window.addEventListener("offline", (e) => {
        console.log("offline");
        onlineMsgContainerArray[randomArrayIndex].style.display = 'none';
        offlineMsgContainerArray[randomArrayIndex].style.display = 'block';
        randomArrayIndex = Math.floor(Math.random() * onlineMsgContainerArray.length);
    });
      
    window.addEventListener("online", (e) => {
        console.log("online");
        offlineMsgContainerArray[tempIndex].style.display = 'none';
        tempIndex = randomArrayIndex;
        onlineMsgContainerArray[randomArrayIndex].style.display = 'block';
    });
}
onlineOfflineToggle();

// console.log(onlineMsgContainerArray);
// console.log(onlineMsgContainerArray.length);
// console.log(randomArrayIndex);

var currentMessageSet = 0;
var sheetDataLength = 0;
var messages = [];
$(document).ready(function () {
    $.getJSON("https://spreadsheets.google.com/feeds/list/1_N_KNtrumRViyYE_GtDQ6dkLJNkvacX3_H2IfdyF9O4/od6/public/values?alt=json", function (data) {
var sheetData = data.feed.entry;
var i;
var tempList;
sheetDataLength = sheetData.length;
for (i = 0; i < sheetData.length; i++) {

  var title = data.feed.entry[i]['gsx$_cn6ca']['$t'];
  var date = data.feed.entry[i]['gsx$_cokwr']['$t'];
  var content = data.feed.entry[i]['gsx$_cpzh4']['$t'];

    tempList = [title, date, content];
    messages.push(tempList);

}
setMessages(messages);

});
});

function setMessages(arr){
    var length = arr.length;
    var i;
    for(i=0;i< length; i++) {
        var title = arr[i][0].toUpperCase();
        var date = arr[i][1];
        var content = arr[i][2].split(" ");
        var printContent = "";
        if (content.length > 15) {
            printContent = content[0] + " " + content[1] + " " + content[2] + " " + content[3] + " " + content[4] + " " + content[5] + " " + content[6] + " " + content[7] + " " + content[8] + " " + content[9] + " " + content[10] + " " + content[11] + " " + content[12] + " " + content[13] + " " + content[14] + "..."; 
        }
        else {
            for(i=0; i < content.length;i++) {
                printContent += content[i] + " ";
            }
        }
        if (i > 3) {
            document.getElementById("messageTable").innerHTML += "<tr onclick='messageViewer(" + i + ")' style='display:none'><td class='messageContainer'><h1 class='messageTitle'>" + title + "</h1><p class='messageContent'>" + printContent + "</p><p class='messageDate'><i>Posted by Benjamin Hudson on " + date + "</i></p></td></tr>"
        }
        else{
        document.getElementById("messageTable").innerHTML += "<tr onclick='messageViewer(" + i + ")'><td class='messageContainer'><h1 class='messageTitle'>" + title + "</h1><p class='messageContent'>" + printContent + "</p><p class='messageDate'><i>Posted by Benjamin Hudson on " + date + "</i></p></td></tr>"
        }
    }
    console.log(arr);
    

}
function showNext(){
    currentMessageSet += 1;
    document.getElementById("prevButton").style.display = "block";
    if((currentMessageSet + 1) * 4 >= sheetDataLength){
        document.getElementById("nextButton").style.display = "none";
    }
    for(i = 0; i < 4; i++) {
        currentMessage = currentMessageSet * 4  + i;
        oldMessage = (currentMessageSet - 1) * 4 + i; 
        document.getElementById("messageTable").getElementsByTagName("tr")[currentMessage].style.display = "block";
        document.getElementById("messageTable").getElementsByTagName("tr")[oldMessage].style.display = "none";
    }
    

}

function showPrev(){
    currentMessageSet -= 1;
    document.getElementById("nextButton").style.display = "block";
    if(currentMessageSet <= 0){
        document.getElementById("prevButton").style.display = "none";
    
    } 
    for(i = 0; i < 4; i++) {
        currentMessage = currentMessageSet * 4  + i;
        oldMessage = (currentMessageSet + 1) * 4 + i; 
        document.getElementById("messageTable").getElementsByTagName("tr")[currentMessage].style.display = "block";
        document.getElementById("messageTable").getElementsByTagName("tr")[oldMessage].style.display = "none";
    }

}

// Get the modal

// Get the <span> element that closes the modal

// When the user clicks on <span> (x), close the modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == document.getElementById("myModal")) {
    document.getElementById("myModal").style.display = "none";
  }
}
function messageViewer(messageNum) {
    var title = messages[messageNum][0].toUpperCase();
    var date = messages[messageNum][1];
    var content = messages[messageNum][2];
    document.getElementsByClassName("modal-header")[0].getElementsByTagName("h2")[0].innerHTML = title;
    document.getElementsByClassName("modal-body")[0].getElementsByTagName("p")[0].innerHTML = "<i>Posted by Benjamin Hudson on " + date + "</i>";
    document.getElementsByClassName("modal-body")[0].getElementsByTagName("p")[1].innerHTML = content;
    document.getElementById("myModal").style.display = "block";
}
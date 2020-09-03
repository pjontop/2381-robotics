var currentMessageSet = 0;
var sheetDataLength = 0;
var messages = [];
$(document).ready(function() {
    $.getJSON("https://spreadsheets.google.com/feeds/list/1h3CvnbLg2FR25cifLhgmqkNKqd49gBcsJD6DxeLfttQ/od6/public/values?alt=json", function(data) {
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
        setCalendar(messages);

    });
});

function setCalendar(arr) {
    var length = arr.length;
    var i;
    var n = 0;

    for (i = 0; i < length; i++) {
        var title = arr[i][0].toUpperCase();
        var date = arr[i][1];
        var content = arr[i][2].split(" ");
        var printContent = content[0] + " " + content[1] + " " + content[2] + " " + content[3] + " " + content[4] + " " + content[5] + " " + content[6] + " " + content[7] + " " + content[8] + " " + content[9] + "...";
        if (i > 2) {
            if (n == 0) {
                document.getElementById("calendarContainer").innerHTML += "<td valign='top' data-aos='zoom-out' class='event1' onclick='messageViewer(" + i + ")' style='transition-duration:0.75s;display:none;'><div><h1 class='messageTitle'>" + title + "</h1><p class='messageDate'>" + date + "</p><p class='messageContent'>" + printContent + "</p></div></td>"
            } else if (n == 1) {
                document.getElementById("calendarContainer").innerHTML += "<td valign='top' data-aos='zoom-out' class='event2' onclick='messageViewer(" + i + ")' style='transition-duration:0.75s;display:none;'><div><h1 class='messageTitle'>" + title + "</h1><p class='messageDate'>" + date + "</p><p class='messageContent'>" + printContent + "</p></div></td>"
            } else {
                document.getElementById("calendarContainer").innerHTML += "<td valign='top' data-aos='zoom-out' class='event3' onclick='messageViewer(" + i + ")' style='transition-duration:0.75s;display:none;'><div><h1 class='messageTitle'>" + title + "</h1><p class='messageDate'>" + date + "</p><p class='messageContent'>" + printContent + "</p></div></td>"
            }
        } else {
            if (n == 0) {
                document.getElementById("calendarContainer").innerHTML += "<td valign='top' style='transition-duration:0.75s' data-aos='zoom-out' class='event1' onclick='messageViewer(" + i + ")'><div><h1 class='messageTitle'>" + title + "</h1><p class='messageDate'>" + date + "</p><p class='messageContent'>" + printContent + "</p></div></td>"
            } else if (n == 1) {
                document.getElementById("calendarContainer").innerHTML += "<td valign='top' style='transition-duration:0.75s' data-aos='zoom-out' class='event2' onclick='messageViewer(" + i + ")'><div><h1 class='messageTitle'>" + title + "</h1><p class='messageDate'>" + date + "</p><p class='messageContent'>" + printContent + "</p></div></td>"
            } else {
                document.getElementById("calendarContainer").innerHTML += "<td valign='top' style='transition-duration:0.75s' data-aos='zoom-out' class='event3' onclick='messageViewer(" + i + ")'><div><h1 class='messageTitle'>" + title + "</h1><p class='messageDate'>" + date + "</p><p class='messageContent'>" + printContent + "</p></div></td>"
            }
        }
        if (n == 2) {
            n = 0;
        } else {
            n += 1;
        }
    }
    console.log(n);


}

function showNext() {
    currentMessageSet += 1;
    document.getElementById("prevButton").style.display = "block";
    if ((currentMessageSet + 1) * 3 >= sheetDataLength) {
        document.getElementById("nextButton").style.display = "none";

    }
    for (i = 0; i < 3; i++) {
        currentMessage = currentMessageSet * 3 + i;
        oldMessage = (currentMessageSet - 1) * 3 + i;
        document.getElementById("calendarContainer").getElementsByTagName("td")[currentMessage].style.display = "table-cell";
        document.getElementById("calendarContainer").getElementsByTagName("td")[oldMessage].style.display = "none";
    }


}

function showPrev() {
    currentMessageSet -= 1;
    document.getElementById("nextButton").style.display = "block";
    if (currentMessageSet <= 0) {
        document.getElementById("prevButton").style.display = "none";

    }
    for (i = 0; i < 3; i++) {
        currentMessage = currentMessageSet * 3 + i;
        oldMessage = (currentMessageSet + 1) * 3 + i;
        document.getElementById("calendarContainer").getElementsByTagName("td")[currentMessage].style.display = "table-cell";
        document.getElementById("calendarContainer").getElementsByTagName("td")[oldMessage].style.display = "none";
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
    document.getElementsByClassName("modal-body")[0].getElementsByTagName("p")[0].innerHTML = "<span class='modal-date'>" + date + "</span>";
    document.getElementsByClassName("modal-body")[0].getElementsByTagName("p")[1].innerHTML = content;
    document.getElementById("myModal").style.display = "block";
}
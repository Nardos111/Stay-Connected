window.finalList = [];
var namesList = [];

function run() {
  fetch("file.txt")
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      var names = data.split("\n");
      names.pop();
      for (var i = 0; i < names.length; i++) {
        namesList.push(names[i].split(" "));
        finalList.push(names[i].split(" "));
      }
      for (var s = 0; s < namesList.length; s++) {
        finalList[s] = [];
      }
      for (var j = 0; j < namesList.length; j++) {
        for (var k = 0; k < namesList[j].length; k++) {
          if (
            namesList[j][k].length > 2 &&
            !namesList[j][k].startsWith("(") &&
            !namesList[j][k].endsWith(")")
          ) {
            finalList[j].push(namesList[j][k]);
          }
        }
      }
      for (var r = 0; r < finalList.length; r++) {
        finalList[r] = finalList[r].join(" ");
      }
      addList(finalList);
    })
    .catch(function (error) {
      console.log(error);
    });
  start();
}

function addList(array) {
  ul = document.createElement("ul");
  document.getElementsByClassName("namelist")[0].appendChild(ul);
  var rowred = document.getElementsByClassName("row-red")[0];
  var plus = array.length * 4.5;
  plus = plus + 15;
  rowred.style.height = `${plus}rem`;
  var numbers = getSequence(array.length);
  var shuffled = shuffle(numbers);
  console.log(shuffled);
  array.forEach(function (item) {
    ul = document.createElement("ul");
    document.getElementsByClassName("namelist")[0].appendChild(ul);
    let li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML += item;
    li.style.display = "inline";
    let lis = document.createElement("li");
    lis.style.display = "inline";
    ul.appendChild(lis);
    lis.innerHTML += shuffled.pop();
    lis.className += "number";
  });
}

function getSequence(max) {
  var numbers = [];
  for (var i = 0; i < max; i++) {
    numbers.push(i + 1);
  }
  return numbers;
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var secondsRemaining;
var intervalHandle;

function resetPage() {
  document.getElementById("inputArea").style.display = "block";
}

function tick() {
  // grab the h1
  var timeDisplay = document.getElementById("time");

  // turn the seconds into mm:ss
  var min = Math.floor(secondsRemaining / 60);
  var sec = secondsRemaining - min * 60;

  //add a leading zero (as a string value) if seconds less than 10
  if (sec < 10) {
    sec = "0" + sec;
  }

  // concatenate with colon
  var message = min.toString() + ":" + sec;

  // now change the display
  timeDisplay.innerHTML = message;

  // stop is down to zero
  if (secondsRemaining === 0) {
    alert("Done!");
    clearInterval(intervalHandle);
    resetPage();
  }

  //subtract from seconds remaining
  secondsRemaining--;
}

function startCountdown() {
  function resetPage() {
    document.getElementById("inputArea").style.display = "block";
  }

  // get countents of the "minutes" text box
  var minutes = document.getElementById("minutes").value;

  // check if not a number
  if (isNaN(minutes)) {
    alert("Please enter a number");
    return; // stops function if true
  }

  // how many seconds
  secondsRemaining = minutes * 60;

  //every second, call the "tick" function
  // have to make it into a variable so that you can stop the interval later!!!
  intervalHandle = setInterval(tick, 1000);

  // hide the form
  document.getElementById("inputArea").style.display = "none";
}

function start() {
  // create input text box and give it an id of "min"
  var inputMinutes = document.createElement("input");
  inputMinutes.setAttribute("id", "minutes");
  inputMinutes.setAttribute("type", "text");

  //create a button
  var startButton = document.createElement("input");
  startButton.setAttribute("type", "button");
  startButton.setAttribute("value", "Start Countdown");
  startButton.setAttribute("class", "start`");
  startButton.onclick = function () {
    startCountdown();
  };

  //add to the DOM, to the div called "inputArea"
  document.getElementById("inputArea").appendChild(inputMinutes);
  document.getElementById("inputArea").appendChild(startButton);
}

function getQuestion(choice) {
  var questions = [];
  var request = new XMLHttpRequest();
  request.open("GET", "data.json", true);
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      var data = JSON.parse(request.responseText);
      for (var i = 0; i < data[0][choice].length; i++) {
        questions.push(data[0][choice][i]);
      }
      displayQuestion(questions);
    } else {
      console.log("error");
    }
  };
  request.onerror = function () {
    console.log("There was an error");
  };
  request.send();
}

function getSelectValue() {
  var selectedValue = document.getElementById("idFormat").value;
  var questions = getQuestion(selectedValue);
}

function displayQuestion(questions) {
  var area = document.getElementById("question");
  area.innerHTML = questions[0];
}

function nextQuestion() {
  var area = document.getElementById("question");
  var category = document.getElementById("idFormat").value;
  var pickedQuestions = [];
  var request = new XMLHttpRequest();
  var nextItem = 0;
  request.open("GET", "data.json", true);
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      var file = JSON.parse(request.responseText);
      index = file[0][category].indexOf(area.innerHTML);
      console.log(file[0][category].length);
      console.log(index);
      if (index >= 0 && index < file[0][category].length - 1) {
        nextItem = file[0][category][index + 1];
      }
      if (nextItem == 0) {
        nextItem = file[0][category][0];
      }
      area.innerHTML = nextItem;
    } else {
      console.log("error");
    }
  };
  request.onerror = function () {
    console.log("There was an error");
  };
  request.send();
}

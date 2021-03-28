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

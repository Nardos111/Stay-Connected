function run() {
  fetch("file.txt")
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      var names = data.split("\n");
      names.pop();
      var finalList = [];
      var namesList = [];
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
      console.log(finalList);
    })
    .catch(function (error) {
      console.log(error);
    });
}

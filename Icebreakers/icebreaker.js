function submit() {
  var fileinput = document.getElementById("myFile");
  var nameList = [];
  Tesseract.recognize(fileinput, "eng").then(({ data: { text } }) => {
    console.log(text);
  });
  for (var i = 0; i < 2; i++) {
    console.log(nameList[i]);
  }
}

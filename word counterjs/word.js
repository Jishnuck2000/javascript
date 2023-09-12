function wordCounter() {
    var text = document.getElementById("input").value;
    var charct=text.length
    var wordCount = 1;
    for (var i = 1; i <= text.length; i++) {
      if (text.charAt(i) == ' ') {
        wordCount++;
      }
    }
    document.getElementById("result").innerText = wordCount;
    document.getElementById("resultss").innerText = charct;
  }
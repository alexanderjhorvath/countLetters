function countLetters(str) {
  var str = str.split(" ").join("").split(""); //str = ["h", "e", "l", "l", "o"]
  var letterCount = {};

  for (var i in str) {
    if (letterCount[str[i]]) {
      letterCount[str[i]] += 1;
    } else {
      letterCount[str[i]] = 1;
    }
  }

  console.log(letterCount);


}

countLetters("lighthouse in the house");
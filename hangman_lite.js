(function() {
     var word = "fantastic";
     var letter = "f";
     var pos = word.indexOf(letter);

     // loop searching for specific character (letter) and count within a given string (Word)
     var count = 0;
     while (pos !== -1) {
          pos = word.indexOf(letter, pos + 1);
          count++;
     }

     if(word.indexOf(letter) >= 0) {
          console.log("Yeah, the letter " + letter + " exists " + count + " times in my word");
     } else {
          console.log("Nope, that letter doesn't exist in my word");
     }
})();

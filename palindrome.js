let word = "kadam";
palArray = word.split("");
let reversed = palArray.reverse();
let unglue = reversed.join("");

  console.log(word);
  console.log(unglue);
  console.log(palArray);
  console.log(reversed);

if (word == unglue){
  console.log("Yes! " + word + " is a palindrome!")
}else{
  console.log("Are you serious?  Of course " + word + " is NOT a palindrome!")
}

//I saw how you could do a one line function as well that does the same thing
//function palindrome(str) {
//  if (str === str.split("").reverse().join("")){
//    console.log("Yes, it is a palindrome!")
//  } else {
//    console.log("No, it is not.")
//  }
//}

//palindrome("aadam");

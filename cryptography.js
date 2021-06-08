

function caesarCipherEncript(str) {

  const alphabetArr = "abcdefghijklmnopqrstuvwxyz".split("");
  let resultrot13EncriptCaesarCypher = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const idx = alphabetArr.indexOf(char);

    // if it is not a letter, don`t shift it
    if (idx === -1) {
      resultrot13EncriptCaesarCypher += char;
      continue;
    }

    // only 26 letters in alphabet, if > 26 it wraps around
    var shift = 20;
    const encodedIdx = (idx + shift) % 26;
    resultrot13EncriptCaesarCypher += alphabetArr[encodedIdx];
  }
  //return res;
  document.getElementById("showresult").value = resultrot13EncriptCaesarCypher;
  //console.log(res);
}




//  Encript Message Function Encript Message Button1
function EncryptMessage(){ 
   var selectedValue = document.getElementById("List").value;
   if (selectedValue == (value="_caesar"))
   {
    var str = document.getElementById("stringvalue").value;
    // DecryptMessage(str);
    caesarCipherEncript(str.toLowerCase());
    
   }
   if(selectedValue == (value="_morase"))
   {
  
    var str = document.getElementById("stringvalue").value;
    convertToMorse(str.toUpperCase());
    
   }
}

//  Decript Caesar cypher Message Function button2
function DecryptMessage(){
  
  var selectedValue = document.getElementById("List").value;
  if(selectedValue ==(value="_caesar"))
  {
    var str = document.getElementById("stringvalue").value;
    caesarCipherDecript(str.toLowerCase());
  }
 
  if(selectedValue ==(value="_morase"))
  { 
    var str = document.getElementById("stringvalue").value;
    convertToMorseDecription(str.toUpperCase());
  }


}
//console.log(rot13DecriptCaesarCypher("URYYB"));

// Option Select Caesar and Morase Code

function getSelectedValue()
{
  var selectedValue = document.getElementById("List").value;
}


// Decoding Casear Cypher Message



//2
function caesarCipherDecript(str) {
 
  const alphabetArr = "abcdefghijklmnopqrstuvwxyz".split("");
  let resultrot13EncriptCaesarCypher = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const idx = alphabetArr.indexOf(char);

    // if it is not a letter, don`t shift it
    if (idx === -1) {
      resultrot13EncriptCaesarCypher += char;
      continue;
    }

    // only 26 letters in alphabet, if > 26 it wraps around
    var shift = 6;
    const encodedIdx = (idx + shift) % 26;
    resultrot13EncriptCaesarCypher += alphabetArr[encodedIdx];
  }
  //return res;
  document.getElementById("showresult").value = resultrot13EncriptCaesarCypher;
  //console.log(res);
}









// Morase Code Encoding


var resultEncodingMoraseCode =" ";
const morseCode = {
  "A": ".-",
  "B": "-...",
  "C": "-.-.",
  "D": "-..",
  "E": ".",
  "F": "..-.",
  "G": "--.",
  "H": "....",
  "I": "..",
  "J": ".---",
  "K": "-.-",
  "L": ".-..",
  "M": "--",
  "N": "-.",
  "O": "---",
  "P": ".--.",
  "Q": "--.-",
  "R": ".-.",
  "S": "...",
  "T": "-",
  "U": "..-",
  "V": "...-",
  "W": ".--",
  "X": "-..-",
  "Y": "-.--",
  "Z": "--.."
}
const convertToMorse = (str) => {
  resultEncodingMoraseCode = str.toUpperCase().split("").map(el => {
     return morseCode[el] ? morseCode[el] : el;
  }).join(" ");
  //  console.log(resultEncodingMoraseCode);
  document.getElementById("showresult").value = resultEncodingMoraseCode.toLowerCase();
};

// Morase Code Decoding

//var resultDecodingMoraseCode = "";
var morseCodeDcript = {".-": "A","-...": "B","-.-.": "C","-..": "D",".": "E","..-.": "F","--.": "G","....": "H","..": "I",".---": "J","-.-": "K",".-..": "L","--": "M","-.": "N","---": "O",".--.": "P","--.-": "Q",".-.": "R","...": "S","-": "T","..-": "U","...-": "V",".--": "W","-..-": "X","-.--": "Y","--..": "Z",".----": "1", "..---": "2", "...--": "3", "....-": "4", ".....": "5", "-....": "6", "--...": "7", "---..": "8", "----.": "9", "-----": "0", "|": "  "};
var convertToMorseDecription = function(morseCode){

  var words = (morseCode).split('  ');
  var letters = words.map((w) => w.split(" "));
  var decoded = [];

  for(var i = 0; i < letters.length; i++){
    decoded[i] = [];
    for(var x = 0; x < letters[i].length; x++){
        if(morseCodeDcript[letters[i][x]]){
            decoded[i].push( morseCodeDcript[letters[i][x]] );
        }
    }
  }
  //resultDecodingMoraseCode =  decoded.map((L) => L.join("   ")).join("");
  resultDecodingMoraseCode =  decoded.map((L) => L.join('')).join(" ");

  //console.log(resultDecodingMoraseCode);
  document.getElementById("showresult").value = resultDecodingMoraseCode.toLowerCase();
}
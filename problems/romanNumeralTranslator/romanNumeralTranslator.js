
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

 var DIGIT_VALUES = {
   I: 1,
   V: 5,
   X: 10,
   L: 50,
   C: 100,
   D: 500,
   M: 1000


 };

 var translateRomanNumeral = function(romanNumeral) {

 translateRomanNumeral.protoype = Object.create(DIGIT_VALUES)

   for(var key in DIGIT_VALUES){
     if(DIGIT_VALUES.hasOwnProperty(key)){
       if(DIGIT_VALUES[key] < DIGIT_VALUES[key]){
         return DIGIT_VALUES[key] + DIGIT_VALUES[key]
       } else if(romanNumeral[0]> romanNumeral[1]){
         return romanNumeral[0] - romanNumeral[1]
       }
     }else{
       return null
     }
   }
 };

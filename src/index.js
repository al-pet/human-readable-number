module.exports = function toReadable (number) {
        

        let digitsToTwenty = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen",
            "nineteen"];
    
        let decades = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

        let hundred = ' hundred'
        
        let thousand = ' thousand'

        let digit = number % 10;
    
        if (number < 20) {
            return digitsToTwenty[number];
        } else if (number < 100) {
            return decades[Math.floor(number / 10) - 2] + (digit ? " " + digitsToTwenty[digit] : "");
        } else {
            return digitsToTwenty[Math.floor(number / 100)] + hundred + (number % 100 === 0 ? "" : " " + toReadable(number % 100));
        }    
        
  
}

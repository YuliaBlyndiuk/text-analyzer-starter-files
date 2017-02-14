

function counter(){

	//set the event listener; when text is submitted...
	$("button").click(function(event){
		
		event.preventDefault();
		//declare variable to store the input & get the input value into the variable
		var inputString = $(".js-input").val();
		//turn the string into an array
		var inputArray = inputString.split(" ");
		//1. count the number of words
		var numberOfWords = inputArray.length;

		//2. count the number of unique words
		//declare uniqueWords array to store the value
		//loop through inputArray and if each next value doesnt equal
		//current value, add it to the uniqueWords array
		//calculate number of items in uniqueWords array
		function countUniqueWords() {
			var uniqueWords = [];
    		for (var i=0; i<inputArray.length; i++) {
        		var currentWord = inputArray[i];
        		if (inputArray[i+1] !== currentWord){
        			uniqueWords.push(inputArray[i+1]);
        			//console.log('uniqueWords', uniqueWords);
        		}
       		};
       		uniqueWordsNumber = uniqueWords.length;
       		//console.log('uniqueWordsNumber', uniqueWordsNumber);
    	}
    	countUniqueWords();
		//3. count average word length:
		//count total number of characters (no whiteSpace & commas, etc)
		//divide it by number of words
		var noWhiteSpace = inputString.split(" ").join("");
		var noPunctuation = noWhiteSpace.replace(/[.,\/#!$%\^&\*;:’{}=\-_`~()]/g,"")
		//console.log('noPunctuation', noPunctuation);
		var totalChar = noPunctuation.length;
		var avgWordLength = totalChar / numberOfWords;

		//4. unhide the class and print out the results
		$('.hidden').removeClass();
		$('#wordCount').append(numberOfWords);
		$('#uniqueCount').append(uniqueWordsNumber);
		$('#avgLength').append(avgWordLength);
	});
}

$(document).ready(function(){
	counter();
});

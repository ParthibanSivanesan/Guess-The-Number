
let n = Math.floor(Math.random() * 10) + 1;
let count = 0;

function guessNumber(event){
    
    event.preventDefault();

    // console.log("n: ", n);

    const userInput = document.getElementById('number').value;
    // console.log("I/P: ", userInput);

    if(userInput>10){
        alert("Please Enter the number between 1-10");
    }else if(userInput == n){
        count++;
        alert("😍 Congrasts!! You guessed it Correct in "+ count +" chances");
        form.reset(); 
    }else if(userInput < n){
        alert("👎 Try Again!! Too Low!");
        count++;
    }else if(userInput > n){
        alert("👎 Try Again!! Too High!");
        count++;
    }

}

const form = document.getElementById('myForm');

form.addEventListener('submit', guessNumber);


let correct_answer=0;
let wrong_answer=0;
let maxAttempts=3;
let check = document.getElementById('check');
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let userinput = document.getElementById('userinput');
let operator_element = document.getElementById('operator');
let question_number=document.getElementById('number');
let score=0;
document.getElementById('score');




let inputted = false; //this is boolean, it holds either a true or false value, nothing else

function randomNum(){
    return Math.ceil(Math.random()*12);
}
function randomoperator(){
    let operators = ['-','+','*','/']; // this will be an array of operation, and since we won't be using the devision sign, i willl be replacing it with the modulud operator, which return thr remainer of a quotient between 2 numbers.
    document.getElementById('operator').innerHTML;
    let randomoperator = operators[Math.floor(Math.random()*operators.length)];
    return randomoperator;
}
randomoperator();
randomNum();

function Answer()
{
    let num1 = document.getElementById('num1');
    let num2 = document.getElementById('num2');
    let operator = document.getElementById('operator');
    display();
    randomoperator();
    randomNum();
    correct_answer= num1+""+operator+""+num2;
    console.log(num1+""+operator+""+num2);
}
Answer();

function display(){
    let num1=Math.ceil(Math.random()*12);
    document.getElementById('num1').innerHTML=number1;
    //the  number will be generate between 1 to 12
    let num2 = Math.ceil(Math.random()*12);
    document.getElementById('num2').innerHTML=number2;
    
    
    let correct_answer;
    correct_answer= num1+""+operators+""+num2;
    question_number=question_number+1;
    
    
    let operators = randomoperator();
    operator_element.innerHTML=operators;
    num1.value=num1;
    num2.value=num2;
  
     // slthough both of these variables a apears to  be storing the same value, it's not because the function will be returnning a random value every single time, so it's possible that they could be the same value
    if(operators ==="-")
    {
        num1>num2;
    }
    if(operators ==="/")
    {
        if(num2===0)
        {
            throw new error ("division by zero is not allowed");
        }
        return Math.abs(num1/num2);
    }
    if(num1,num2)
    {
        if(num2===0){
            throw error("not allowed");
        }
        let result=num1/num2;
        result=result>=0?Math.floor(result):Math.ceil(result);
        return Math.abs(result);
    } 
    runInterval();
    Answer();
}
display();
runInterval();
Answer();








function validate()
{
    
       
    if(userinput === correct_answer)
    {
        display();
        question_number=question_number+1;
        question_number++;
        score ++;
        runInterval();
    }
    else if(userinput === '')
    {
        alert('Enter a value');      
    }
    else if(userinput === wrong_answer)
    {
        alert('Enter the correct answer');
        if(maxAttempts>0)
        {
            maxAttempts--;
            display();
        }
    }
    else
    {
        
        
        display();
        score ++;
        if(score < 0)
        {
            alert("Score can't be negative, game over!!"); // will reload page if score dips blow 0 into the negative
            location.reload(); //will reload the page if it matches the condition
        }
        
    }
    userinput.value="";
    
        

}




//timer

function runInterval(){
    
    Display();
    timer=10;
    time_stop=setinterval(function(){
        timer-=1;
        count_down.innerHTML=timer+"seconds";
        if(timer===0)
        {
            ClearInterval(time_stop);
            document.getElementById("userinput").disabled=true;
            document.getElementById("number").disabled=false;
            // when player finished 10 question
            if(question_number===10)
            {
                document.getElementById("number").disabled=false;
                document.getElementById("Finished").disabled=false;
            }
        }
    },1000);
    // this funtion  will run every 100 millisecond,
    // and each time it will decrement 100 milliseconds 
    // from our countdown and display it onto our screen
}
runInterval();
//end timer

// lastly, we just need to add these functions to our buttons ...
check.addEventListener('click', validate); // when click the button it will run the validation() function


//to make the game easier for the user to use , i've added 2 differernt eventlistener that will run the exact same function
// enter button to check answer
userinput.addEventListener('keyup',(e) =>{
    if(!inputted){
        runInterval();
        inputted = true;
    }
    if(e.keyCode === 13){
        validate();
    }
});



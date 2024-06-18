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
const audio=document.getElementById("myAudio");
let inputted = false; //this is boolean, it holds
//either a true or false value, nothing else

function randomNum(){
    return Math.ceil(Math.random()*12);
}
function randomoperator(){
    let operators = ['-','+','*','/']; // this will be an array of operation, 
    //and since we won't be using the devision sign, i willl be replacing 
    //it with the modulud operator, which return thr remainer of a quotient 
    //between 2 numbers.
    document.getElementById('operator').innerHTML;
    let randomoperator = operators[Math.floor(Math.random()*operators.length)];
    return randomoperator;
}
randomoperator();
randomNum();



function display(){
    let number1=Math.ceil(Math.random()*12);
    document.getElementById('num1').innerHTML=number1;
    //the  number will be generate between 1 to 12
    let number2 = Math.ceil(Math.random()*12);
    document.getElementById('num2').innerHTML=number2;
    let operators = randomoperator();
    let userinput=number1+operators+number2; 
    question_number=question_number+1;
    operator_element.innerHTML=operators;
    num1.value=num1;
    num2.value=num2;
     // slthough both of these variables a apears to  be storing the same value, 
     // it's not because the function will be returnning a random 
     // value every single time, so it's possible that they could be the same value
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
   
}
display();

function Answer()
{
    let operators =randomoperator();
    let number1=display();
    let number2= display();
    let correct_answer= number1+operators+number2;
    document.getElementById('userinput').innerHTML=correct_answer;
    console.log(number1+""+operators+""+number2);
    
}
Answer();



function validate()
{
    if(userinput === Answer)
    {
        question_number++;
        score=score+100;
        document.getElementById('score');
        score ++;
        display();
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
            alert("Score can't be negative, game over!!"); 
            // will reload page if score dips blow 0 into the negative
            location.reload(); //will reload the page if it matches the condition
        }     
    }
    userinput.value="";
}
validate();



//timer


//end timer

// lastly, we just need to add these functions to our buttons ...
check.addEventListener('click', validate); // when click the button 
//it will run the validation() function


//to make the game easier for the user to use , i've added 2 
//differernt eventlistener that will run the exact same function
// enter button to check answer
userinput.addEventListener('keyup',(e) =>{
    if(!inputted){
        inputted = true;
    }
    if(e.keyCode === 13){
        validate();
    }
});

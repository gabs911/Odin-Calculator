let num1 = 0;
let num2 = 0;
let op = "";
let displayValue = "";
let clearOnNextClick = false;

const displayDiv = document.querySelector(".display");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector("#clear");
const signButton = document.querySelector("#sign");
const percentButton = document.querySelector("#percent");

//Add populate function to all number buttons
Array.from(document.querySelectorAll(".num")).forEach((item) =>
{
    item.addEventListener('click', function(e){
        //Populates the display with clicked number
        if(!clearOnNextClick)
        {
            displayDiv.textContent += e.target.textContent;
            
        }
        else
        {
            displayDiv.textContent = e.target.textContent;
            clearOnNextClick = false;
        }
      });
});

////Operations logic
Array.from(document.querySelectorAll(".op")).forEach((item) =>
{
    item.addEventListener('click', function(e){
        //Handles operation selection
        op = e.target.textContent;
        num1 = Number(displayDiv.textContent);
        clearOnNextClick = true;
      });
});

/////Equal button logic
equalButton.addEventListener("click", function(e)
{
    num2 = Number(displayDiv.textContent);
    console.log(operate(num1,num2,op));
    displayDiv.textContent= operate(num1,num2,op);
});

//AC button logic
clearButton.addEventListener("click", function(e)
{
    num2 = 0;
    num1 = 0;
    displayDiv.textContent= "";
});

//Sign button logic
signButton.addEventListener("click", function(e)
{
    displayDiv.textContent= String(-1 * Number(displayDiv.textContent));
});

//Percent button logic
percentButton.addEventListener("click", function(e)
{
    displayDiv.textContent= String(Number(displayDiv.textContent)/100);
});















function add(a,b)
{
    return a +b;
}

function subtract(a,b)
{
    return a-b;
}

function multiply(a,b)
{
    return a*b;
}

function divide(a,b)
{
    return a/b;
}

function operate(a,b,op)
{
    if(op === "+")
    {
        return add(a,b);
    }
    else if(op === "-")
    {
        return subtract(a,b);
    }
    else if(op === "*")
    {
        return multiply(a,b);
    }
    else if(op === "/")
    {
        return divide(a,b);
    }
}
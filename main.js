function Add (a,b){
    return a + b;
}

function Subtract (a,b){
    return a - b;
}

function Multiply(a,b){
    return a*b; 
}

function Divide (a, b) {
    if ( b === 0) { return 'Error. Cannot divide by zero';}
    return parseFloat(a)/ b;
}


function Operate (operator, a, b) {
    return operator(a,b);
}


console.log(Operate(Add,5,3));
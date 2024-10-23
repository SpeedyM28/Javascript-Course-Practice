let length;
let width;

function calculateArea(){
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    let area = length * width;

    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

function calculate_total_expenditure(){
    let a = parseFloat(document.getElementById('grocery1').value);
    let b = parseFloat(document.getElementById('grocery2').value);
    let c = parseFloat(document.getElementById('grocery3').value);

    let total = a+b+c;

    //note, the next 6 lines are due to a small
    //javascript error which would result in 
    //calculations such as:
    //3+2+5.12 = 10.120000000001
    //hence to eliminate that inaccuracy the code
    //below was produced
    let fix = total * 100;
    if(fix != parseInt(fix)){
        fix = parseInt(fix);
        fix = parseFloat(fix / 100);
        total = fix;
    }

    document.getElementById('grocery_result').innerText = `The total amount is: $${total}`
}
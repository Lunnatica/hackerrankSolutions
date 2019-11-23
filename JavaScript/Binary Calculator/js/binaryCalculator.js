function writeCharOnRes(e) { // update res div every time an input button is clicked
    var btn = e.target || e.srcElement; // for IE compatibility
    res.innerHTML += btn.innerHTML 
}

function operate() { // do the operation
    let op1
    let op2 = 0
    let opsArr = []
    let operation = ""
    let result = ""
    
    // Get the operator (either + / - *)
    if(res.innerHTML.indexOf("+") !== -1) operation = "+" // sum
    else if(res.innerHTML.indexOf("-") !== -1) operation = "-" // subs
    else if(res.innerHTML.indexOf("*") !== -1) operation = "*" // mul
    else if(res.innerHTML.indexOf("/") !== -1) operation = "/" // division

    
    opsArr = res.innerHTML.split(operation) // get the two operands
    op1 = parseInt(opsArr[0],2) // bin to dec
    op2 = parseInt(opsArr[1],2) // bin to dec

    result = Math.floor(eval(op1 + operation + op2)) // operate 
    res.innerHTML = result.toString(2) // to binary again
}       

var res = document.getElementById("res")
var btn0 = document.getElementById("btn0") 
var btn1 = document.getElementById("btn1")
var btnClr = document.getElementById("btnClr")
var btnEql = document.getElementById("btnEql")
var btnSum = document.getElementById("btnSum")
var btnSub = document.getElementById("btnSub")
var btnMul = document.getElementById("btnMul")
var btnDiv = document.getElementById("btnDiv")  


btn0.onclick = writeCharOnRes
btn1.onclick = writeCharOnRes
btnSum.onclick = writeCharOnRes
btnSub.onclick = writeCharOnRes
btnMul.onclick = writeCharOnRes
btnDiv.onclick = writeCharOnRes

btnEql.onclick = operate

btnClr.onclick = function() { // clears the result div
    res.innerHTML = ""
}

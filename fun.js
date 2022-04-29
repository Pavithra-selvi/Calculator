var v = document.getElementById("result");


function dis(val) {
    v.value += val;
}

function solve() {
    // let x = document.getElementById("result").value
    // let y = eval(x)
    // document.getElementById("result").value = y
    
    v.value = eval(v.value);
}

function clr() {
    v.value = "";
}

function cancel() {
    v.value = v.value.substr(0, v.value.length - 1);
}



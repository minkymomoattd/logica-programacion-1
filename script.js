let x = prompt ("enter first number: ");
let y = prompt ("enter first number: ");
let z = prompt ("enter first number: ");

function sortNums(x,y,z) {
    let num1=0;
    let num2=0;
    let num3=0;
    if (x != y != z){
        if (x < y){
            num1 = x;
            num2 = y;
        } else {
            num1 = y;
            num2 = x;
        }
        if (num2 < z){
            num3 = z;
        } else {
            num2 = z;
            num3 = y;
        }
    }



    return num1, num2, num3;
}

alert(sortNums(x,y,z));
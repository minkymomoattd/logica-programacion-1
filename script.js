let x = prompt ("enter first number: ");
let y = prompt ("enter first number: ");
let z = prompt ("enter first number: ");

function sortNums(x,y,z) {
    let num1=0;
    let num2=0;
    let num3=0;
    if (x != y && x != z && z != x){
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
            num3 = num2;
            num2 = z;
        }
        if (num1 < z){
            alert("ascendente: "+num1+", "+num2+", "+num3);
            alert("descendente: "+num3+", "+num2+", "+num1);
        } else {
            alert("ascendente: "+num2+", "+num1+", "+num3);
            alert("descendente: "+num3+", "+num1+", "+num2);
        }
        
    } else {
        alert("error, son iguales");
    }

    
}

sortNums(x,y,z);
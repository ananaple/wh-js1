

var a = Number(prompt("Input a number", ""));
var b = Number(prompt("Input a number", ""));
var c = Number(prompt("Input a number", ""));

    // document.writeln(a + "c" + b + "x+" + c + "=0 <br/>");
    
    // var Dis = b * b - 4 * a * c;
    // console.log("Discriminant = " + Dis);
    // if (Dis >= 0) {
    //     var x1 = (-b + Math.sqrt(Dis)) / (2 * a);
    //     var x2 = (-b - Math.sqrt(Dis)) / (2 * a);
    //     var result = " x1 = " + x1 + "; x2 = " + x2;
    //     alert(result);
    //     document.write(result);
    
    // } else {
    //     alert("немає коренів");
    //       }




function solveQuation(a, b, c) {
    if (isNaN(a) || isNaN(b) || isNaN(c)) { 
        throw 'Input is not a number';
    }
    var Dis = b * b - 4 * a * c;
    if (Dis >= 0) {
        return {
            x1: (-b + Math.sqrt(Dis)) / (2 * a),
            x2: (-b - Math.sqrt(Dis)) / (2 * a),
            }
    } else {
        throw 'No solution - немає коренів';
    }
}



try {
    var result = solveQuation(a, b, c);
    
    document.write(a + "x<sup>2</sup>+" + b + "x+" + c + "=0 <br/>");
    document.write("x1=" + result.x1 + "; x2= " + result.x2 + "<br/>");
    
} catch (error) {
    alert(error);    //alert(error.message) виводить undefined
}

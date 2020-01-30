
function filter(objectToSort){
    let compilation = {strings: [], numbers: [], booleans: []};
    //let compilation = [];
    for (let object of objectToSort){
        if (typeof object === 'string'){
            compilation['strings'].push(object);
        }
        else if (typeof object === 'number'){
            compilation.numbers.push(object);
        }
        else{
            compilation.booleans.push(object);
        }
    }
    return compilation;

}



let input = [-1,5,"cat", false, 10.2, true, "dog"];

let results = filter(input);
let stringified = JSON.stringify(results);
console.log(stringified);
document.getElementById("homework").innerHTML = stringified;

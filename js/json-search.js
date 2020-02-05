

//creating new json variable
var  people = [
    {
        name:"Dallas Sloan",
        sex: "m",
        born:"1992",
        died: "alive",
        father: "James Sloan",
        mother: "Michelle Rockwell"
    },
    {
        name:"Jane Doe",
        sex: "f",
        born:"1876",
        died: "1956",
        father: "Petrus de Miliano ",
        mother: "Soohia van Damme"
    },
    {
        name:"Jane Ramirez",
        sex: "f",
        born:"1901",
        died: "1999",
        father: "Peter Ramirez",
        mother: "Rochelle Ramirez"
    },
    {
        name:"Peter Pumpkineater",
        sex: "m",
        born:"1788",
        died: "1888",
        father: "Craig Torres",
        mother: "Rachel Rose"
    },
    {
        name:"Pele Pierce",
        sex: "m",
        born:"1950",
        died: "alive",
        father: "Sebastian Bach",
        mother: "Karla Shumpert"
    }
    ];


function filter(array, test){
    let passed = [];
    for (let element of array) {
       // element.name = element.name.toLowerCase();
        if (element.name.toLowerCase().includes(test)) {
            passed.push(element);
        }

    }

    return passed;
}

//get value from textbox

let search = document.getElementById("search");

search.onclick = function(){
   let stringToSearch = document.getElementById("searchFor").value;
   stringToSearch = stringToSearch.toLowerCase();
   console.log(stringToSearch);
   let test = filter(people, stringToSearch);
   if(test.length <=0){
       document.getElementById("output").innerHTML = "No person Found";
   }
   else {
       console.log(test);
       let output = showOutput(test);
       document.getElementById("output").innerHTML = output;
   }
};

function showOutput(array){
    let output = [];
    for(let element of array){
        output+= "Name: "+element.name +"<br>Sex: "+element.sex + "<br>Born: " + element.born + "<br>Died: " + element.died + "<br>Father: " + element.father +
            "<br>Mother: " + element.mother + "<br><br>";
    }
    return output;
}

//let test = filter(people, "Pe");

//console.log(test);
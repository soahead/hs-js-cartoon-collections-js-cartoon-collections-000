
function dwarfRollCall(dwarves) {
  let str = ""
    //loops array members
   for (let i = 0; i < dwarves.length; i++){
     if (i < dwarves.length - 1){
  
       //display the order of array members
        str += `${i+1}. ${dwarves[i]} `  ;
     }
        //displays the last array member
      else {
        str += `${i+1}. ${dwarves[i]} `  ;
      }
   }
return str;
}

function summonCaptainPlanet(planeteerCalls){
      //create new array
   planeteerCalls = planeteerCalls.map(function(summonCaptainPlanet){ 
     //convert to uppercase and concatenate !
     return summonCaptainPlanet.toUpperCase() + "!";
   });
  return planeteerCalls;
}

function longPlaneteerCalls(words) {
  let str = "";
  for (let i = 0; i < words.length; i++){
    //checks for array members with up to four characters 
    if(words[i].length <= 4){
      str = false;
    }
    else {
      str = true;
    }
  }
  return str;
}

function findTheCheese(foods) {
  let str = "";
  for (let i = 0; i < foods.length; i++){
    //const pets = ['cat', 'dog', 'bat'];
    //console.log(pets.includes('cat'));
    const cheeses = ["cheddar", "gouda", "camembert"];
    if(foods[i].includes(cheeses)){
    str = [i];
    }
    else {
      str = "no cheese!";
    }
  }
  return str;
}


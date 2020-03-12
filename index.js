
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
  //create 2nd array
  const cheeses = ['cheddar', 'gouda', 'camembert', 'swiss'];
  //looping array for matching string
  for (let i = 0; i < foods.length; i++){
    //nested 2nd array loop for comparison
    for (let j = 0; j < cheeses.length; j++){
    if (foods[i] === cheeses[j]){
      return foods[i]
      }  
    }
    
  }
  return "no cheese!"
}

function wordsWithB(words){
  for (i = 0; i < words.length; i++){
    if var = words[i].startsWith("B")
  }  
}













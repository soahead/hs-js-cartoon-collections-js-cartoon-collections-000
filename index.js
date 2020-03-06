
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
return str
}

function summonCaptainPlanet(planeteerCalls){
      //create new array
   planeteerCalls = planeteerCalls.map(function(summonCaptainPlanet){ 
     //convert to uppercase and concatenate !
     return summonCaptainPlanet.toUpperCase() + "!"
   })
  return planeteerCalls
}

function longPlaneteerCalls(words) {
  let str = "";
  for (let i = 0; i < words.length; i++){
    //checks array members up to four characters 
    if([i.length] < 5){
      str = false
    }
    else {
      str = true
    }
  }
  return str
}

function findTheCheese(foods) {
}


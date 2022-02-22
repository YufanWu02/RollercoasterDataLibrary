var url = "https://raw.githubusercontent.com/YufanWu02/Data-Files/main/Rollercoasters%20(2).csv";

var rollercoasterName = getColumn(url, 1);
var countryName = getColumn(url, 4);
var cityName = getColumn(url, 3);
var yearOpened = getColumn(url, 12);
var speed = getColumn(url, 8);
var height = getColumn (url, 7);
var inversion = getColumn (url, 10);

//Finds which country has what rollercoasters.
//country {string} - a country to get the corresponding rollercoaster in the country.
//return {string} - rollercoasters in the country given.
function getRollercoasterByCountry(country){
  country = country.toLowerCase();
  var rollercoaster = [];
  for (var i = 0; i < countryName.length; i++){
    if (country == countryName[i].toLowerCase()){
      rollercoaster.push(rollercoasterName[i]);
    }
  }
    if(rollercoaster.length > 0){
    return rollercoaster;
  }
  else {
  return "No rollercoasters match your search. Please check your input message!";
  }
}
console.log(getRollercoasterByCountry("peru"));


//Finds which city has what rollercoasters.
//city {string} - a city to get the corresponding rollercoaster in the city.
//return {string} - rollercoasters in the city given.
function getRollercoasterByCity(city){
  city = city.toLowerCase();
  var rollercoaster = [];
  for (var i = 0; i < cityName.length; i++){
    if (city == cityName[i].toLowerCase()){
      rollercoaster.push(rollercoasterName[i]);
    }
  } 
  if(rollercoaster.length > 0){
    return rollercoaster;
  }
  else {
  return console.log("No rollercoasters match your search. Please check your input message!");
  } 
}
  var coasters = getRollercoasterByCity("Lima");
  for(var i in coasters){
  console.log(coasters[i]);
}

//Decides if a rollercoaster is opened between the year ranged. 
//min {number} - The earliest time to check if a rollercoaster has opened. 
//max {number} - The latest time to check if a rollercoaster has opened. 
//return {string} - rollercoasters opened in the year range. 
function getRollercoasterByYearRange(min,max){
  var rollercoaster = [];
  for (var i = 0; i<yearOpened.length; i++){
    if (yearOpened[i]>= min && yearOpened[i] <= max){
      rollercoaster.push(rollercoasterName[i]);
    }
  }
  if(rollercoaster.length > 0){
    return rollercoaster;
  }
  else {
  return console.log("No rollercoasters match your search. Please check your input message!");
  }
}
console.log(getRollercoasterByYearRange(2004,2004));



//Decides the average speed of all the rollercoaster listed.
//return {number} - average speed of all the rollercoaster in the table. 
function findAverageSpeed(){
  var total = 0;
  for (var i=0; i < speed.length; i++){
    total = total + Number(speed[i]);
  }
  avg = total / speed.length;
  return avg;
}
console.log("Average Speed of All Rollercoaster:");
console.log(findAverageSpeed());



//Decides if a rollercoaster has inversion or no and if its height is above the given height. 
//inversion {boolean} - whether a rollercoaster has inversion or no. 
//heights {number} - The height of a rollercoaster to check.
//return {string} - rollercoasters fit the inversion option and heights given.
function getRollercoasterByInversionAndHeight(inversions, heights){
  var rollercoaster = [];
  for (var i=0; i < inversion.length && i < height.length; i++){
  if (inversion[i] == inversions && height[i] > heights) {
    rollercoaster.push(rollercoasterName[i]);
  }
}
    if(rollercoaster.length > 0){
    return rollercoaster;
  }
  else {
  return "No rollercoasters match your search. Please check your input message!";
  }
}
console.log("Rollercoaster that have match inversion and height:");
console.log(getRollercoasterByInversionAndHeight("No", 200));


function person(name, haircolor){
  this.name = name;
  this.haircolor = haircolor;
  this.setName = function(newname){
    this.name = newname
  }
}

var david = new person('john', 'black');
var malik = new person('jane', 'brown');

david.setName('jason');


function contacts(name, nationality, age){
  this.name = name,
  this.nationality = nationality,
  this.age = age,
  
  this.setName = function(newname){
    this.name = newname
  }
  
  this.getName = function(){
    return this.name
  }
  
  this.getNatonality = function(){
    
  }
}


console.log(contacts instanceof Object)



function apartments(bedrooms,cats){
  this.bedrooms = bedrooms;
  this.cats = cats;
  // this.setBedrooms = function(newbed){
  //   this.bedrooms = newbed
  // }
  // this.getBedrooms = function(){
  //   return this.bedrooms
  // }
}

apartments.prototype.setBedrooms = function(newamount){
  this.bedrooms = newamount;
}

apartments.prototype.setCats = functon(newcatamount){
  this.cats = newcatamount;
}

var newap = new apartments(2)



function animal(habitat,food){
  this.habitat = habitat,
  this.food = food
}

animal.prototype.facts = function(){
  return this.habitat + " " + this.food + this.isMammal;
}

function mammal(habitat,food,isMammal,isBlue){
  this.isMammal = isMammal,
  this.isBlue = isBlue
  
  animal.call(this, habitat, food)
}

mammal.prototype = Object.create(animal.prototype);

var cow = new mammal('meddow', 'grass', true , false);

cow.facts()



























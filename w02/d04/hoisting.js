var myvar = 'my value';


//will return Undefined followed by 'local value'
//WHY!?

(function (){
	//behind the scences myvar is getting declared
	//var myvar
	alert(myvar);

	//if you comment this out you will get two alerts with "my value"
	var myvar = 'local value';

	alert(myvar);

})();

//Becuase of a magical JS thing called hoisting
//variables, specifically the decleration gets moved to the top. Only the decleration not the initilization
//This is why its recommended to put all your variables defined at the top



//This also happens with functions

(function(){

	//will return hello world because function ws hoisted to the top
	newFunction();


	function newFunction(){
		alert('hello world')
	}

	//if instead we had 
	var newFunction = function(){
		alert('hello world')
	}

	//we would get nothing becuase the newFunction got declared but not the implementation

})();
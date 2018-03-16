/* var numbers = [33,54,76,34,2,6];
numbers.forEach(function(number){
	console.log(number);	
});
document.write("<br/>");
if(1==3){
	console.log('This is true');
}else{
	console.log('This is FALSE');
}
// Constructor Pattern
function Fruit(name,color,shape){
	this.name = name;
	this.color = color;
	this.shape = shape;
	
	this.describe = function(){
		return ' A ' + this.name + ' is the color ' + this.color + ' and its shape is ' +  this.shape;
		
	}
}
var apple = new Fruit('apple','red','round');
var melon = new Fruit('melon','green','round');
var orange = new Fruit('orange','orange','round');



console.log(melon.describe ());
document.write("<br/>");
var users = [
    {
		name:'John Doe ', age:30
	},
    {
		name:'Ahmed Eid ', age:32
	},
    {
		name:'Amr Foda ', age:38
	},
];
console.log( users[0].name);
document.write("<br/>");
// Events
function doClick(){
	alert('You Clicked !!!');
}
//Html stuff;
<button onclick="doClick()">Click Me</button>
<button onclick="this.innerHTML = 'You Clicked ??!'">Click Me</button>
document.write("<br/>");
function changeText(){
	var last = document.getElementById('last');
	last.innerHTML = 'NOOOO ,, You Clicked';
} 
//Html stuff;
<h3 id="last">Learning JavaScript</h3>
<button onclick="changeText()">Click Me</button> */ 
function showDate(){
	var time = document.getElementById('time');
	time.innerHTML = Date();
}
 function clearDate(){
	var time = document.getElementById('time');
	time.innerHTML = '';
} 
// Forms
function changeBackground(x){
	console.log(x.value);
	var body = document.getElementById('body');
	body.style.backgroundColor = x.value;
}
function returnvalidateForm(){
	var firstName = document.forms["myForm"]["firstName"].value;
	
	if(firstName==null || firstName == ""){
		alert("First name is required");
		return false;
	}
		if(firstName.length < 3){
		alert("First name must be at least 3 chars");
		return false;
	}

}
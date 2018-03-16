



/* document.write("<br/>"); 
 function doSomething(){
	document.write("Bizza "); 
}
setInterval("doSomething() ",1000); 
 function printTime(){
	var now = new Date();
	var hours = now.getHours();
	var mins = now.getMinutes();
	var seconds = now.getSeconds();
	document.write(hours+":"+mins+":"+seconds+"<br/>")
} 
setInterval("printTime() ",1000 ); 

document.write("<br/>");

var x = document.forms[0].length; 
document.write(x); 
var x = document.amr.elements[1].name;
document.write(x);
*/

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
//w3school

var myVar1 = setInterval(function(){ setColor() }, 1000);
 
function setColor() {
  var x = document.body;
  x.style.backgroundColor = x.style.backgroundColor == "yellow" ? " 99bbff" : "yellow";
}
 
function stopColor() {
  clearInterval(myVar1);
}

//w3school
var myVar = setInterval(myTimer ,1000);
function myTimer() {
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}
 /* function checkCookies() {
    var text = "";
    if (navigator.cookieEnabled == true) {
        text = "Cookies are enabled.";
    } else {
        text = "Cookies are not enabled.";
    }
    document.getElementById("cookies").innerHTML = text;
} 
function myFunction1() {
    var x = document.createElement("STYLE");
    var t = document.createTextNode("body {font: 20px verdana;}");
    x.appendChild(t);
    document.head.appendChild(x);
}
function myFunction2() {
    document.getElementById("myH1").style.color = "red";
}
function myFunction3() {
    document.body.style.backgroundColor = "red";
}
function myFunction4() {
    document.body.style.backgroundColor = "yellow";
}
 */
/* function changeBackground(x){
	console.log(x.value);
	var body = document.getElementById('body');
	body.style.backgroundColor = x.value;
}
 */
 /* var wh =  (y);
  var y = ffffff;
 function changeTextColor(y){
console.log(y.value);
var text = document.getElementsById('wh');
text.style.textColor = y.value;
} */

 function myFunction4() {
    document.getElementById("white").style.color = "white";
	document.getElementById("demo").style.color = "white";     
    document.getElementsByTagName().style.color = "white";
} 
 /* if(body.background.style.color == blue){
	    document.getElementById("wh").style.color = "white"
		;} */

function myFunction5() {
    var greeting;
    var time = new Date().getHours();
    if (time < 10) {
        greeting = "Good morning";
    } else if (time < 20) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }
document.getElementById("domy").innerHTML = greeting;
}
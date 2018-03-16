 /* function myScript() {
	document.write("Clicked");
} 

function myScript() {
	var person = "Daniel";
	document.write(person);
}
myScript();
*/
var navStatus = true;
function toggleNav() {
	if(navStatus==true) {
       document.getElementById("closenav").style.left = "-300px";
      navStatus=false;
	}
    else if(navStatus==false) {
       document.getElementById("closenav").style.left = "0px";
      navStatus=true;
	}

}
 /* toggleNav(); */
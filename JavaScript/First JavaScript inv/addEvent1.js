 var headStatus = true;
 var header1Status = true;
function changeColor1() {
	if(headStatus==true) {
       document.getElementById("header1").style.backgroundColor = "blue";
      headStatus=false;
	}
    else if(headStatus==false) {
       document.getElementById("header1").style.backgroundColor = "red";
      headStatus=true;
	}}  

	function daTe() {
   var date = document.getElementById("date1");
   date.innerHTML = daTe();
   }
   function clearDate(){
	   var date = document.getElementById("date1");
	   date.innerHTML = "The time is :";
   }________________________________________________________________
	   function changeColor3(){
		document.getElementById("header1").style.backgroundColor = "#272727";
function changeColor() {
	if(header1Status==true) {
       document.getElementById("header1").style.backgroundColor = "blue";
      header1Status=false;
	}
    else if(header1Status==false) {
       document.getElementById("header1").style.backgroundColor = "red";
      header1Status=true;
	}}  

		document.getElementById("last").style.color = "yellow";
		
		addEventListener("click",activateColor);
	 }

/* 
	 	  addEventListener("click",activateColor);

	  textColor.addEventListener("click",changeColor2);
	   function changeColor2(){
		  document.getElementById("text").style.Color = "yellow";
	  }

  */
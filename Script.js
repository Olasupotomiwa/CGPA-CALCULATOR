 function writeMessage(){
    var scores = document.querySelectorAll("#demo1");
    var points = document.querySelectorAll("#demo2");
    var unitElements = document.querySelectorAll("#Unit");
    var pointSum=0
    var unitSum=0
    var i;
  for (i = 0; i < scores.length; i++) {
  if (scores[i].value < 45) { points[i].value = 0;}
else if  (scores[i].value < 50) { points[i].value = 1;}
else if  (scores[i].value < 60) { points[i].value = 2;}
else if  (scores[i].value < 70) { points[i].value = 3;}
else { points[i].value = 4;}
pointSum+=Number(points[i].value)*Number(unitElements[i].value)
unitSum+=Number(unitElements[i].value)
}
cgpa=pointSum/unitSum
cgpa=cgpa.toFixed(2)
// return the list of important value
return [pointSum,unitSum,cgpa]
}
function summary(index) {
summaryList=writeMessage()//Calling the function to get the important value.
summaryElements=document.querySelectorAll('.summary');
x = summaryList[index];
if(isNaN(x)) alert ("Enter your scores with the corresponding number of units")
  else if (x < 1) alert("CGPA : " + x + " \n Withdrawal From University");
else if (x < 2) alert("CGPA : " + x + " \n Division: Third Class ");
else if (x < 3) alert("CGPA : " + x + " \n Division: Second Class Lower");
else if (x < 3.5) alert("CGPA : " + x + " \n Division: Second Class Upper");
else alert("CGPA : " + x + " \n First Class");
}





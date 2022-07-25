//First Function to control the get CGPA button
    $("#OpenBtn").click(function() {
        $("#staticBackdrop").modal('show');
      
      
      });  
      
      $(".btn-close").click(function() {
        $("#staticBackdrop").modal('hide');
      
      
      });       
      
       //Function to access the input value
         function writeMessage(){
          var scores = document.querySelectorAll(".demo1");
          var points = document.querySelectorAll(".demo2");
          var unitElements = document.querySelectorAll(".Unit");
          var pointSum=0
          var unitSum=0
          var i;

          //Loop through the inpux box to assign a point
        for (i = 0; i < scores.length; i++) {
        if (scores[i].value < 40) { points[i].value = 0;}
      else if  (scores[i].value > 100) { points[i].value = "✖";}
      else if  (scores[i].value < 45) { points[i].value = 1;}
      else if  (scores[i].value < 50) { points[i].value = 2;}
      else if  (scores[i].value < 60) { points[i].value = 3;}
      else if  (scores[i].value < 70) { points[i].value = 4;}
      else { points[i].value = 5;}

      //Add all the point and unit separately
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
      if(isNaN(x)) document.querySelector(".modal-body").innerHTML = "Enter your scores with the corresponding number of units"
        else if (x < 1)  document.querySelector(".modal-body").innerHTML = "<strong>CGPA : " + x +  " <br> Withdrawal From University";
      else if (x < 1.5)  document.querySelector(".modal-body").innerHTML = "<strong>CGPA : " + x + " <br> Pass ";
      else if (x < 2.5)  document.querySelector(".modal-body").innerHTML = "<strong>CGPA : " + x + " <br> Division: Third Class";
      else if (x < 3.5)  document.querySelector(".modal-body").innerHTML = "<strong>CGPA : " + x + " <br> Division: Second Class Lower";
      else if (x < 4.5)  document.querySelector(".modal-body").innerHTML = "<strong>CGPA : " + x + " <br>  Division: Second Class Upper ";
      else  document.querySelector(".modal-body").innerHTML = "<strong>CGPA : " + x + " <br> Division: First Class ";
      }
      

      //Function to append new input box
      function append() {
       //first column 
      var input = document.createElement("input");
      input.type = "number"
      input.classList.add("demo1")
      input.addEventListener("keyup", writeMessage);
      var td = document.createElement("td");
      td.appendChild(input);
      var tr = document.createElement("tr");
      tr.appendChild(td);
      
      
      //Second column
      var input1 = document.createElement("input");
      input1.type = "text"
      input1.classList.add("demo2")
      input1.disabled = true;
      var td = document.createElement("td");
      td.appendChild(input1);
      tr.appendChild(td);
         
         
      //Third Column
      var input2 = document.createElement("input");
      input2.type = "number"
      input2.classList.add("Unit")
      var td = document.createElement("td");
      td.appendChild(input2);
      tr.appendChild(td);
      
      var table = document.getElementById("Inside-table");
      
      table.appendChild(tr);
      }

 var button = document.querySelector('#OpenBtn')
      var spinner = document.querySelector('.lds-spinner')
      button.addEventListener("click", CtrlContent)
      function CtrlContent(){
        document.querySelector('.modalc').style.display = 'none'
        spinner.style.display = 'block'
        setTimeout( () => {
          document.querySelector('.lds-spinner').style.display = 'none'
          document.querySelector('.modalc').style.display = 'block'
        
         
         
      }, 1500);

      }
      
      
      
      
       

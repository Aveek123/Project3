var Button = document.getElementById("RollButton");
var locker1 = document.getElementById("locker1");
var locker2 = document.getElementById("locker2");
var token1A = document.getElementById("token1A");
var token2A = document.getElementById("token2A");
var token1B = document.getElementById("token1B");
var token2B = document.getElementById("token2B");

var count = 1;
var n=1;
var dieNo = 0;
var A = 0;
var B = 0;
var R = 0;

function userDie(){

	var x = prompt("enter the die no (warning! You will enter manual mode if u do so!) : ","1-6");
    dieNo = x;

}
    
Button.onclick = function turn(){

		if(n != count){

    		document.addEventListener("click",function(){

    			event.preventDefault();
    		}
    			,false);


    } else{

    var min=1; 
    var max=7;  
    var Random = Math.floor(Math.random() * (+max - +min)) + +min;

    if(dieNo>0 && dieNo<7 && ((dieNo)*10)%10 == 0){

    Random = dieNo;

    } 
    document.getElementById("DiceNoIndicator").innerHTML = Random;
    R = Random
    n = n + 1;

    if(count%2 == 1){

    	document.getElementById("turn_indicator").innerHTML = "turn : A";
    	locker1.onclick = function(){
           
          if(R == 6){

          	if(token1A.className == "" && token2A.className == ""){
          	token1A.className = "cellUH1";

          } else if(token1A.className != "" && token2A.className == ""){token2A.className = "cellUH1"}

          else if(token1A.className == "" && token2A.className != ""){token1A.className = "cellUH1"}

         count = count + 1;
         n = n + 1;
          
          } else{

            if(token1A.className == "cellUH1"){

          	if (R == 5){token1A.className = "cellUH6"}
          	else if (R == 4){token1A.className = "cellUH5"}
          	else if (R == 3){token1A.className = "cellUH4"}
          	else if (R == 2){token1A.className = "cellUH3"}
          	else if (R == 1){token1A.className = "cellUH2"}
             }

            if(token1A.className == "cellUH1"){

          	if (R == 5){token1A.className = "cellUH6"}
          	else if (R == 4){token1A.className = "cellUH5"}
          	else if (R == 3){token1A.className = "cellUH4"}
          	else if (R == 2){token1A.className = "cellUH3"}
          	else if (R == 1){token1A.className = "cellUH2"}
             }

            if(token1A.className == "cellUH2"){
          	if (R == 5){token1A.className = "cellUH7"}
          	else if (R == 4){token1A.className = "cellUH6"}
          	else if (R == 3){token1A.className = "cellUH5"}
          	else if (R == 2){token1A.className = "cellUH4"}
          	else if (R == 1){token1A.className = "cellUH3"}
          }

            if(token1A.className == "cellUH3"){
            if (R == 5){token1A.className = "cellRV1"}
          	else if (R == 4){token1A.className = "cellUH7"}
          	else if (R == 3){token1A.className = "cellUH6"}
          	else if (R == 2){token1A.className = "cellUH5"}
          	else if (R == 1){token1A.className = "cellUH4"}
            }

            if(token1A.className == "cellUH4"){
            if (R == 5){token1A.className = "cellRV2"}
          	else if (R == 4){token1A.className = "cellRV1"}
          	else if (R == 3){token1A.className = "cellUH7"}
          	else if (R == 2){token1A.className = "cellUH6"}
          	else if (R == 1){token1A.className = "cellUH5"}
            }

            if(token1A.className == "cellUH5"){
            if (R == 5){token1A.className = "cellRV3"}
          	else if (R == 4){token1A.className = "cellRV2"}
          	else if (R == 3){token1A.className = "cellUV1"}
          	else if (R == 2){token1A.className = "cellUH7"}
          	else if (R == 1){token1A.className = "cellUH6"}
          } 
  }

    	 
    	  count = count + 1;

    	};

    }  else{

    	document.getElementById("turn_indicator").innerHTML = "turn : B";
    	locker2.onclick = function(){

          if(R == 6){

          	if(token1B.className == "" && token2B.className == ""){
          	token1B.className = "cellLH1";

          } else if(token1B.className != "" && token2B.className == ""){token2B.className = "cellLH1"}

          else if(token1B.className == "" && token2B.className != ""){token1B.className = "cellLH1"}

          	count = count + 1;
          n = n + 1;
          
          } else{

            if(token1B.className == "cellLH1"){

          	if (R == 5){token1B.className = "cellLH6"}
          	else if (R == 4){token1B.className = "cellLH5"}
          	else if (R == 3){token1B.className = "cellLH4"}
          	else if (R == 2){token1B.className = "cellLH3"}
          	else if (R == 1){token1B.className = "cellLH2"}
             }

            if(token2B.className == "cellLH1"){
          	if (R == 5){token2B.className = "cellLH6"}
          	else if (R == 4){token2B.className = "cellLH5"}
          	else if (R == 3){token2B.className = "cellLH4"}
          	else if (R == 2){token2B.className = "cellLH3"}
          	else if (R == 1){token2B.className = "cellLH2"}
             }

            if(token1B.className == "cellLH2"){
          	if (R == 5){token1B.className = "cellLH7"}
          	else if (R == 4){token1B.className = "cellLH6"}
          	else if (R == 3){token1B.className = "cellLH5"}
          	else if (R == 2){token1B.className = "cellLH4"}
          	else if (R == 1){token1B.className = "cellLH3"}
          }

            if(token1B.className == "cellLH3"){
            if (R == 5){token1B.className = "cellLV1"}
          	else if (R == 4){token1B.className = "cellLH7"}
          	else if (R == 3){token1B.className = "cellLH6"}
          	else if (R == 2){token1B.className = "cellLH5"}
          	else if (R == 1){token1B.className = "cellLH4"}
            }

            if(token1B.className == "cellLH4"){
            if (R == 5){token1B.className = "cellLV2"}
          	else if (R == 4){token1B.className = "cellLV1"}
          	else if (R == 3){token1B.className = "cellLH7"}
          	else if (R == 2){token1B.className = "cellLH6"}
          	else if (R == 1){token1B.className = "cellLH5"}
            }

            if(token1B.className == "cellLH5"){
            if (R == 5){token1B.className = "cellLV3"}
          	else if (R == 4){token1B.className = "cellLV2"}
          	else if (R == 3){token1B.className = "cellLV1"}
          	else if (R == 2){token1B.className = "cellLH7"}
          	else if (R == 1){token1B.className = "cellLH6"}
            }
          } 
          } 

        count = count + 1;

    	};

  }


};




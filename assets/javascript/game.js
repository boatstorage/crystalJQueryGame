
   	var wins = 0;
   	var losses = 0;
   	var count = 0;
   	var crystalNUmberArray = [];
   	var crystalNum = ""; 
   	var randomNum = "";


 	function getRandomIntInclusive(min, max) {
 		min = Math.ceil(min);
 		max = Math.floor(max);
 		return Math.floor(Math.random() * (max - min + 1)  + min);

	};

	function GetFirstNumber() {
			randomNum = getRandomIntInclusive(19, 120)
	  	 	$("#random-number").html(randomNum);
	  		

	};
	
	console.log(randomNum);

	 
	 function generateCrystalNumber() {


		for (var i = 1; i < 5; i++){
			var crystalId = $("#img" + i);
			crystalId.attr("value", getRandomIntInclusive(1,12));
			var crystalNum = crystalId.attr("value");
			crystalNUmberArray.push(crystalNum);
			crystalNum = crystalNUmberArray[crystalNUmberArray.length -1]; 
			

		}
	}
	
	function startGame(){
  	count = 0;
  	$("#win-lose").html("");
  


   	var img1 = crystalNUmberArray[0];
   	var img2 = crystalNUmberArray[1];
   	var img3 = crystalNUmberArray[2];
   	var img4 = crystalNUmberArray[3];
  




  	GetFirstNumber();
  	generateCrystalNumber();

		

	
	$(".navbar-brand").append(crystalNum);

	$("#score-tracker").html(count);

	$(".navbar-brand").on("click", function() {

		 var crystalValue = ($(this.children).attr("value"));
    		crystalValue = parseInt(crystalValue);

		count += crystalValue

	$("#score-tracker").html(count);


	if (count === randomNum) {
    wins += 1;
    $("#win-lose").html("<h1>YOU WIN!</h1>");
    $("#win-lose").append("<i></i>");
    $("#win-lose").addClass("fa fa-spin fa-3x fa-fw");   
    $("#wins").html("<h3>" + wins + "</h3>");
    $(".navbar-brand").unbind("click");
    setTimeout(function() {
    	  $("#win-lose").removeClass("fa fa-spin fa-3x fa-fw");   
            startGame();
        }, 5000);
	}

	else if (count >= randomNum) {
    losses += 1;
    $("#win-lose").html("<h2> Try again </h2>");
    $("#win-lose").append("<i></i>");
    $("#win-lose").addClass("fa fa-spin fa-3x fa-fw"); 
    $("#losses").html("<h3>" + losses + "</h3>");
    $(".navbar-brand").unbind("click");
    setTimeout(function() {
    		$("#win-lose").removeClass("fa fa-spin fa-3x fa-fw"); 
          startGame();
        }, 3000);
  } else {

  }

});

}

startGame();


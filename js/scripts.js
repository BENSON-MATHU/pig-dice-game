$(document).ready(function(){
  $("#roll-dice").click(function(){
//back end

    var die1 = Math.ceil(Math.random()*6)+1;
    var die2 = Math.ceil(Math.random()*6)+1;
    $("#die1").text(die1);
    $("#die2").text(die2);
    var totalScore= function(){
      return die1 + die2 ;
    }

  $("#total").text(totalScore());
  var double ="YOU HAVE A DOUBLE VALUE";
  if(die1===die2){
    $("#message-first-palyer").text(double);
    $("#roll-dice").click
  }


  });
   // if(totalScore===4;){
   //   function(){
   //   $("#sec-palyer-roll-dice").show();
   //     $("#roll-dice").hide();
   //   }
   // }else{
   //  $("#roll-dice").show();
   // }
   //  }
});

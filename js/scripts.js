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
    $("#roll-dice").click(function(){
      $("#message-first-palyer").hide();
    });
  }
});

// $("roll-dice").click(fu);
  $("#sec-palyer-roll-dice").click(function(){
//back end

    var die3 = Math.ceil(Math.random()*6)+1;
    var die4 = Math.ceil(Math.random()*6)+1;
    $("#die3").text(die3);
    $("#die4").text(die4);
    var totalScore2= function(){
      return die3 + die4 ;
    }

  $("#total2").text(totalScore2());
  var double2 ="YOU HAVE A DOUBLE VALUE";
  if(die3===die4){
    $("#message-second-palyer").text(double2);
    $("#sec-palyer-roll-dice").click(function(){
      $("#message-second-palyer").hide();
    });
  }
});



});

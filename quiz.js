function start() {
    document.getElementById("first-question").style.display = "block";
    document.getElementById("start-page").style.display = "none";
  }
  function first() {
    document.getElementById("first-question").style.display = "none";
    document.getElementById("second-question").style.display = "block";
  }
  function second() {
    document.getElementById("second-question").style.display = "none";
    document.getElementById("third-question").style.display = "block";
  }
  function third() {
    document.getElementById("third-question").style.display = "none";
    document.getElementById("fourth-question").style.display = "block";
  }
  
  function result() {
    var score = 0;
  
    if (document.getElementById("correct1").checked) {
      score++;
    }
    if (document.getElementById("correct2").checked) {
      score++;
    }
    if (document.getElementById("correct3").checked) {
      score++;
    }
    if (document.getElementById("correct4").checked) {
      score++;
    }
    document.getElementById("fourth-question").style.display = "none";
    let final = (document.getElementById("total").style.display = "block");
    document.getElementById("reset").style.display="block";
    document.getElementById(
      "total"
    ).innerText = `Your score is ${score}`;
    
  }
  function reset(){
    let firstPage=document.getElementById("first-question").style.display = "block";
    document.getElementById("reset").style.display="none";
    document.getElementById("total").style.display = "none";
    
  }

    
  
 
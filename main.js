//• Skriv klassen Quiz. Den ska hålla reda på användarens namn,
// frågorna som ingår och hur många frågor som har besvarats korrekt/felaktigt.
class Quiz{
    constructor(){
        this.name ="";
        this.questions = [];
        this.rightCounter = 0;
        this.wrongCounter = 0;
        this.amount = 0;
        this.current_question = 0;
    }

    loadQuestions(incomingQuestions) {
        for(var i=0; i<this.amount; i++){
         this.questions.push(incomingQuestions[i]);

        }
        console.log(this.questions);
    }
}

//Den ska hålla reda på frågekategori, 
//fråga, svarsalternativ och om svarsalternativet är korrekt eller inte.
class Question{
    constructor(){
    this.category = "";
    this.ask = "";
    this.answers = [];
    }
}

class Answer{
    constructor(){
        this.text = "";
        this.isCorrect = false;
    }
}
var quiz = new Quiz();
function hideMain(){
    document.getElementById("main").style.display = "none";
    var name = document.getElementById("namn").value;
    var amount = document.getElementById("antal").value;
    quiz.name = name;
    quiz.amount = amount;
    quiz.loadQuestions(myQuestions);
    document.getElementById("question").style.display = "block";
    showQuestion();

}

function showQuestion(){
    if(quiz.current_question <= quiz.amount){
    document.getElementById("ask").innerHTML = quiz.questions[quiz.current_question].question;
    document.getElementById("la").innerHTML = quiz.questions[quiz.current_question].answer.a;
    document.getElementById("lb").innerHTML = quiz.questions[quiz.current_question].answer.b;
    document.getElementById("lc").innerHTML = quiz.questions[quiz.current_question].answer.c;
    document.getElementById("ld").innerHTML = quiz.questions[quiz.current_question].answer.d;
    quiz.current_question += 1;
    }
}

function showRestOfQuestion(){
    if(hasAnswered() == false){
        alert("Du har inte fyllt i något");
        return;
    }
    if(quiz.current_question < quiz.amount){
        document.getElementById("ask").innerHTML = quiz.questions[quiz.current_question].question;
        document.getElementById("la").innerHTML = quiz.questions[quiz.current_question].answer.a;
        document.getElementById("lb").innerHTML = quiz.questions[quiz.current_question].answer.b;
        document.getElementById("lc").innerHTML = quiz.questions[quiz.current_question].answer.c;
        document.getElementById("ld").innerHTML = quiz.questions[quiz.current_question].answer.d;
        quiz.current_question += 1;
        }else{
           document.getElementById("question").style.display = "none";
            document.getElementById("result").style.display = "block";
        }

}

function hasAnswered(){
    if(  document.getElementById("a").checked == true ||
         document.getElementById("b").checked == true ||
         document.getElementById("c").checked == true ||
         document.getElementById("d").checked == true){
             return true;
         }
    return false;
}





function loadJSON(file, callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'https://www.mocky.io/v2/5da0ac863000007000f8a037', true);
    xobj.onreadystatechange = function() {
      if (xobj.readyState == 4 && xobj.status == "200") {
        callback(xobj.responseText);
      }
    };
    xobj.send(null);
  }

  var myQuestions = "";
  loadJSON('https://www.mocky.io/v2/5da0ac863000007000f8a037', function(response) {
     myQuestions = JSON.parse(response);
  });
  
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

            var newQuestion = new Question;
            newQuestion.ask = incomingQuestions[i].question;
            newQuestion.answers = incomingQuestions[i].answer;
            newQuestion.correctAnswer = incomingQuestions[i].correctAnswer;
            console.log(newQuestion.answers);
            console.log(incomingQuestions[i]);
            console.log(newQuestion.correctAnswer);




            this.questions.push(newQuestion);

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
    this.answers = {};
    this.correctAnswer = [];
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
    document.getElementById("ask").innerHTML = quiz.questions[quiz.current_question].ask;
    document.getElementById("la").innerHTML = quiz.questions[quiz.current_question].answers.a;
    document.getElementById("lb").innerHTML = quiz.questions[quiz.current_question].answers.b;
    document.getElementById("lc").innerHTML = quiz.questions[quiz.current_question].answers.c;
    document.getElementById("ld").innerHTML = quiz.questions[quiz.current_question].answers.d;
    quiz.current_question += 1;
    }
}

function showRestOfQuestion(){
    if(hasAnswered() == false){
        alert("Du har inte fyllt i något");
        return;
    }
    console.log(document.getElementById("a").checked);
    console.log(document.getElementById("b").checked);
    console.log(document.getElementById("c").checked);
    console.log(document.getElementById("d").checked);
    console.log()
    if(quiz.current_question < quiz.amount){
        document.getElementById("ask").innerHTML = quiz.questions[quiz.current_question].ask;
        document.getElementById("la").innerHTML = quiz.questions[quiz.current_question].answers.a;
        document.getElementById("lb").innerHTML = quiz.questions[quiz.current_question].answers.b;
        document.getElementById("lc").innerHTML = quiz.questions[quiz.current_question].answers.c;
        document.getElementById("ld").innerHTML = quiz.questions[quiz.current_question].answers.d;
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
    xobj.open('GET', 'https://www.mocky.io/v2/5da4b1c23500006d004a78a8', true);
    xobj.onreadystatechange = function() {
      if (xobj.readyState == 4 && xobj.status == "200") {
        callback(xobj.responseText);
      }
    };
    xobj.send(null);
  }

  var myQuestions = "";
  loadJSON('https://www.mocky.io/v2/5da4b1c23500006d004a78a8', function(response) {
     myQuestions = JSON.parse(response);
  });
  
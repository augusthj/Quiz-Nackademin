//• Skriv klassen Quiz. Den ska hålla reda på användarens namn,
// frågorna som ingår och hur många frågor som har besvarats korrekt/felaktigt.
class Quiz{
    constructor(){
        this.name ="";
        this.questions = [];
        this.rightCounter = 0;
        this.amount = 0;
        this.current_question = 0;
    }

    loadQuestions(incomingQuestions) {
        for(var i=0; i<this.amount; i++){

            var newQuestion = new Question;
            newQuestion.ask = incomingQuestions[i].question;
            newQuestion.answers = incomingQuestions[i].answer;
            newQuestion.correctAnswer = incomingQuestions[i].correctAnswer;
            newQuestion.category = incomingQuestions[i].category;


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
    var numberCheck = document.getElementById("antal").value;
    if(document.getElementById("namn").value === ""){
        alert("Fyll i ett namn");
        return;
    }
    if(isNaN(numberCheck) == true || numberCheck > 10 || numberCheck <= 0){
        alert("Fyll i ett tal mellan 1 - 10");
        return;
    }
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
    document.getElementById("category").innerHTML = quiz.questions[quiz.current_question].category;
    document.getElementById("ask").innerHTML = quiz.questions[quiz.current_question].ask;
    document.getElementById("la").innerHTML = quiz.questions[quiz.current_question].answers.a;
    document.getElementById("lb").innerHTML = quiz.questions[quiz.current_question].answers.b;
    document.getElementById("lc").innerHTML = quiz.questions[quiz.current_question].answers.c;
    console.log(quiz.questions[quiz.current_question].category);
    }
}

function showRestOfQuestion(){
    if(hasAnswered() == false){
        alert("Du har inte fyllt i något");
        return;
    }
    checkAnswers();
    if(quiz.current_question < quiz.amount-1){
        quiz.current_question += 1;
        document.getElementById("a").checked = false;
        document.getElementById("b").checked = false;
        document.getElementById("c").checked = false;               
        document.getElementById("category").innerHTML = quiz.questions[quiz.current_question].category;
        document.getElementById("ask").innerHTML = quiz.questions[quiz.current_question].ask;
        document.getElementById("la").innerHTML = quiz.questions[quiz.current_question].answers.a;
        document.getElementById("lb").innerHTML = quiz.questions[quiz.current_question].answers.b;
        document.getElementById("lc").innerHTML = quiz.questions[quiz.current_question].answers.c;
        

    }else{
        document.getElementById("question").style.display = "none";
        document.getElementById("result").style.display = "block";
        console.log(quiz.rightCounter);
        document.getElementById("right").innerHTML = quiz.rightCounter;
        document.getElementById("wrong").innerHTML = quiz.amount - quiz.rightCounter;
        document.getElementById("namn2").innerHTML = quiz.name;
        document.getElementById("total").innerHTML = quiz.amount; 
    }
    console.log(quiz.questions[quiz.current_question].category);
}

function hasAnswered(){
    if(  document.getElementById("a").checked == true ||
         document.getElementById("b").checked == true ||
         document.getElementById("c").checked == true){
             return true;
         }
    return false;
}

function checkAnswers(){
    if ( quiz.questions[quiz.current_question].correctAnswer == "a"){
        if(document.getElementById("a").checked == true &&
        document.getElementById("b").checked == false &&
        document.getElementById("c").checked == false ){
            quiz.rightCounter += 1;
        }

    }else if(quiz.questions[quiz.current_question].correctAnswer == "b"){
        if(document.getElementById("a").checked == false &&
        document.getElementById("b").checked == true &&
        document.getElementById("c").checked == false ){
            quiz.rightCounter += 1;
        }

    }else if ( quiz.questions[quiz.current_question].correctAnswer == "c"){
        if(document.getElementById("a").checked == false &&
        document.getElementById("b").checked == false &&
        document.getElementById("c").checked == true ){
            quiz.rightCounter += 1;
        }
    }else if ( quiz.questions[quiz.current_question].correctAnswer == ["a", "b"]){
        if(document.getElementById("a").checked == true &&
        document.getElementById("b").checked == true &&
        document.getElementById("c").checked == false ){
            quiz.rightCounter += 1;
        }

    }else if ( quiz.questions[quiz.current_question].correctAnswer == ["a", "c"]){
        if(document.getElementById("a").checked == true &&
        document.getElementById("b").checked == false &&
        document.getElementById("c").checked == true ){
            quiz.rightCounter += 1;
        }

    }else if ( quiz.questions[quiz.current_question].correctAnswer == ["b","c"]){
        if(document.getElementById("a").checked == false &&
        document.getElementById("b").checked == true &&
        document.getElementById("c").checked == true ){
            quiz.rightCounter += 1;
        }

    }else if ( quiz.questions[quiz.current_question].correctAnswer == ["a","b","c"]){
        if(document.getElementById("a").checked == true &&
        document.getElementById("b").checked == true &&
        document.getElementById("c").checked == true ){
            quiz.rightCounter += 1;
        }
    }
}



function loadJSON(file, callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'https://www.mocky.io/v2/5da9b4023100000e004e0b21', true);
    xobj.onreadystatechange = function() {
      if (xobj.readyState == 4 && xobj.status == "200") {
        callback(xobj.responseText);
      }
    };
    xobj.send(null);
  }

  var myQuestions = "";
  loadJSON('https://www.mocky.io/v2/5da9b4023100000e004e0b21', function(response) {
     myQuestions = JSON.parse(response);
  });
  
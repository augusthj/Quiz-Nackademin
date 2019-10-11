//• Skriv klassen Quiz. Den ska hålla reda på användarens namn,
// frågorna som ingår och hur många frågor som har besvarats korrekt/felaktigt.
class Quiz{
    constructor(){
        this.name ="";
        this.questions = [];
        this.rightCounter = 0;
        this.wrongCounter = 0;
        this.amount = 0;
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
}
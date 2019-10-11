//• Skriv klassen Quiz. Den ska hålla reda på användarens namn,
// frågorna som ingår och hur många frågor som har besvarats korrekt/felaktigt.
class Quiz{
    constructor(){
        this.name ="";
        this.questions = [];
        this.rightCounter = 0;
        this.wrongCounter = 0;
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

function hideMain(){
    
}
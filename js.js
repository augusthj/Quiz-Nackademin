

    var x = myQuestion.question;
    document.getElementById("test").innerHTML = x;
    console.log(myQuestion);

function hideMain(){
document.getElementById("main").style.display = "none";
console.log("test");
document.getElementById("question").style.display ="block";
};




var myQuestion = [
    {
        question: "Vilket år landade första människan på månen?",
        answer: {
            a: "1946",
            b: "1957",
            c: "1969"
                },
        correctAnswer: "c"
    },
    {
        question: "Vilken är den starkaste chilin i världen?",
        answer: {
            a: "Ghost pepper",
            b: "Trinidad Moruga Scorpion",
            c: "Carolina Reaper"
                },
        correctAnswer: "c"
    },
    {
        question: "Vilket år föll berlinmuren?",
        answer: {
            a: "1991",
            b: "1989",
            c: "1993"
                 },
        correctAnswer: "a"
    }

];


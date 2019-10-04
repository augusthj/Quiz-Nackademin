var userAntal = document.getElementById("antal").innerHTML;
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

for(i=0; i<=userAntal;){
document.getElementById("test").innerHTML = myQuestion[i].question;
document.getElementById("label1").innerHTML = myQuestion[i].answer.a;
document.getElementById("label2").innerHTML = myQuestion[i].answer.b;
document.getElementById("label3").innerHTML = myQuestion[i].answer.c;
i++;
};

function userSubmit(){

    for(i=0; i<=userAntal;){
        document.getElementById("test").innerHTML = myQuestion[i].question;
        document.getElementById("label1").innerHTML = myQuestion[i].answer.a;
        document.getElementById("label2").innerHTML = myQuestion[i].answer.b;
        document.getElementById("label3").innerHTML = myQuestion[i].answer.c;
        i++;
        };
}






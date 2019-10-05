//var userAntal = document.getElementById('antal').value;

function hideMain(){
document.getElementById("main").style.display = "none";
console.log("test");
document.getElementById("question").style.display ="block";
var userAntal = document.getElementById("antal").value;
console.log(userAntal);

for(i=1; i<=userAntal; i++)
createQuestion(myQuestion[i].question, myQuestion[i].answer.a, 
    myQuestion[i].answer.b, myQuestion[i].answer.c);
};



var myQuestion = [
    {
    },
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

function createQuestion(questions, answer1, answer2, answer3) {
    var div_element = document.createElement("div");
    var question = document.createElement("p");
    var checkB1 = document.createElement("input");
    var checkB2 = document.createElement("input");
    var checkB3 = document.createElement("input");
    var label11 = document.createElement("label");
    var label22 = document.createElement("label");
    var label33 = document.createElement("label");
    question.innerHTML = questions  ;
    checkB1.type = "checkbox";
    checkB1.value = "a";
    checkB1.name = "checkB1";
    checkB2.type = "checkbox";
    checkB2.value = "b";
    checkB2.name = "checkB2";
    checkB3.type = "checkbox";
    checkB3.value = "c";
    checkB3.name = "checkB3";
    checkB3.id = "checkB3";
    checkB2.id = "checkB2";
    checkB1.id = "checkB1";
    label11.setAttribute("for",checkB1);
    label11.innerHTML = answer1;
    label22.setAttribute("for",checkB2);
    label22.innerHTML = answer2;
    label33.setAttribute("for",checkB3);
    label33.innerHTML = answer3;
    div_element.appendChild(question);
    div_element.appendChild(checkB1);
    div_element.appendChild(label11);

    div_element.appendChild(checkB2);
    div_element.appendChild(label22);
    
    div_element.appendChild(checkB3);
    div_element.appendChild(label33);

    document.body.appendChild(div_element);
  }





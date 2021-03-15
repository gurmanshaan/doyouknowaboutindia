var readlineSync = require("readline-sync");
var userName = readlineSync.question("What is your name?" + "\n");
console.log("Welcome " + userName + " to the Game: DO YOU KNOW ABOUT INDIA?");
var score = 0;
function questions(question, answer) {
    var userAnswer = readlineSync.question(question);
    if (userAnswer.toUpperCase() === answer.toUpperCase()) {
        console.log("Right!");
        score = score + 1;
    }
    else {
        console.log("Wrong!");
    }
    console.log("Score: ", score);
}

var ques = [
    quesOne = {
        question: "1." + "Who is the Prime Minister of India?" + "\n" +
            "A" + ":" + "Narendra Modi" + "\n" +
            "B" + ":" + "Rahul Gandhi" + "\n" +
            "C" + ":" + "Ram Nath Kovind" + "\n" +
            "D" + ":" + "Arvind Kejriwal" + "\n" +
            "Your Option:",
        answer: "A"
    },
    quesTwo = {
        question: "2." + "Who is the President of India?" + "\n" +
            "A" + ":" + "Narendra Modi" + "\n" +
            "B" + ":" + "Rahul Gandhi" + "\n" +
            "C" + ":" + "Ram Nath Kovind" + "\n" +
            "D" + ":" + "Arvind Kejriwal" + "\n" +
            "Your Option:",
        answer: "C"
    },
    quesThree = {
        question: "3." + "Who wrote National Anthem of India?" + "\n" +
            "A" + ":" + "Mahamta Gandhi" + "\n" +
            "B" + ":" + "Swami Vivekananda" + "\n" +
            "C" + ":" + "Rabindranath Tagore" + "\n" +
            "D" + ":" + "Sri Aurobindo" + "\n" +
            "Your Option:",
        answer: "C"
    },
    quesFour = {
        question: "4." + "What is the national heritage animal of India?" + "\n" +
            "A" + ":" + "Lion" + "\n" +
            "B" + ":" + "Bengal Tiger" + "\n" +
            "C" + ":" + "Indian Elephant" + "\n" +
            "D" + ":" + "Deer" + "\n" +
            "Your Option:",
        answer: "C"
    },
    quesFive = {
        question: "5." + "What is the national fruit of India?" + "\n" +
            "A" + ":" + "Apple" + "\n" +
            "B" + ":" + "Banana" + "\n" +
            "C" + ":" + "Kiwi" + "\n" +
            "D" + ":" + "Mango" + "\n" +
            "Your Option:",
        answer: "D"
    },
    quesSix = {
        question: "6." + "How many states are there in India?" + "\n" +
            "A" + ":" + "29" + "\n" +
            "B" + ":" + "30" + "\n" +
            "C" + ":" + "28" + "\n" +
            "D" + ":" + "27" + "\n" +
            "Your Option:",
        answer: "C"
    },
    quesSeven = {
        question: "7." + "How many UT's are there in India?" + "\n" +
            "A" + ":" + "7" + "\n" +
            "B" + ":" + "9" + "\n" +
            "C" + ":" + "6" + "\n" +
            "D" + ":" + "8" + "\n" +
            "Your Option:",
        answer: "D"
    },
    quesEight = {
        question: "8." + "Which city is called health capital of India?" + "\n" +
            "A" + ":" + "New Delhi" + "\n" +
            "B" + ":" + "Chennai" + "\n" +
            "C" + ":" + "Mumbai" + "\n" +
            "D" + ":" + "Kolkata" + "\n" +
            "Your Option:",
        answer: "B"
    },
    quesNine = {
        question: "9." + "Why city is cleanest in India?" + "\n" +
            "A" + ":" + "Chandigarh" + "\n" +
            "B" + ":" + "Indore" + "\n" +
            "C" + ":" + "Surat" + "\n" +
            "D" + ":" + "Navi Mumbai" + "\n" +
            "Your Option:",
        answer: "B"
    },
    quesTen = {
        question: "10." + "What is the national tree in India?" + "\n" +
            "A" + ":" + "Banyan" + "\n" +
            "B" + ":" + "Neem" + "\n" +
            "C" + ":" + "Mango" + "\n" +
            "D" + ":" + "Deodar" + "\n" +
            "Your Option:",
        answer: "A"
    }
]

for (i = 0; i < ques.length; i++) {
    var q = ques[i];
    questions(q.question, q.answer);
}


console.log('Your final score: ' + score);

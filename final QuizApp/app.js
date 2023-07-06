// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import {
    getDatabase,
    ref,
    onChildAdded
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyABMo8caIMLnKDS_F3No5H3-AFAhQfsF1Q",
    authDomain: "quizapp-48cc1.firebaseapp.com",
    databaseURL: "https://quizapp-48cc1-default-rtdb.firebaseio.com",
    projectId: "quizapp-48cc1",
    storageBucket: "quizapp-48cc1.appspot.com",
    messagingSenderId: "235271115144",
    appId: "1:235271115144:web:6b55d9cbafb26d8c7baa3d",
    measurementId: "G-W4PPJ1KSZR"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();
var reference = ref(database, `questions/`)
onChildAdded(reference, function (data) {
    console.log(data.val());
    questions.push(data.val())
    renderQuestion();

})

var questions = [


]

var question = document.getElementById("question");
var option = document.getElementById("option")
var correctAnswer




var indexVal = 0;
function renderQuestion() {
    var que = questions[indexVal]
    question.innerHTML = que.question
    currentQuestion.innerHTML = indexVal + 1;
    totalQuestion.innerHTML = questions.length

    option.innerHTML = ""
    for (var i = 0; i < que.options.length; i++) {
        correctAnswer = que.correctAnswer
        option.innerHTML += `<button id = "btn" onclick="checkAns('${que.correctAnswer}', '${que.options[i]}')">${que.options[i]}</button>`
    }

};
var quiz = document.getElementById('quiz')
var marksdiv = document.getElementById('marksdiv')
var btn = document.getElementById("btn")
//   renderQuestion();
var btn = document.getElementById("btn")

var marks = 0;
var main = document.getElementById("main")
var markshtml = document.getElementById("marks");
window.checkAns = function (a, b) {
    if (indexVal + 1 == questions.length) {
        main.style.display = "none"
        quiz.style.display = "none"
        marksdiv.style.display = "inline-block"
    }
    if (a == b) {
        markshtml.innerHTML = ++marks
        ++indexVal
        renderQuestion()
    }
    else {
        ++indexVal
        renderQuestion()

    }

}
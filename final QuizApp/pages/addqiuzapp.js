// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import {
    getDatabase,
    ref,
    set,
    push,
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

// ===================================================================================================================================================================================================================================
var question = document.getElementById('question');
var option = document.getElementById('option');
var optionsParent = document.getElementById('optionsParent');
var correctAnswerElem = document.getElementById('correctAnswer');
function allEmty() {
    question.value = "";
    option.value = "";
    optionsParent.innerHTML = ""
    correctAnswerElem.innerHTML = ""
}

var correctAnswer
var options = []

function renderOptions() {
    optionsParent.innerHTML = "";
    for (var i = 0; i < options.length; i++) {
        optionsParent.innerHTML += `<li class ="p-2 mt-3 bg-light fs-5 rounded-2" onclick="setCorrectAnswer('${options[i]}')">${options[i]}</li>`
    }
}

window.addOptions = function () {

    options.push(option.value)

    renderOptions()
    option.value = ""
}

window.setCorrectAnswer = function (a) {
    correctAnswer = a
    correctAnswerElem.innerHTML = correctAnswer

}

window.submitQuestion = function () {
    var quizIdRef = push(ref(database, 'questions')).key
    var obj = {
        question: question.value,
        options: options,
        correctAnswer: correctAnswer,
        id: quizIdRef
    }


    var quizRef = ref(database, `questions/${quizIdRef}/`)
    set(quizRef, obj)
    allEmty()
}
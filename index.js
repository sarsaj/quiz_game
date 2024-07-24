#!/usr/bin/env node
import inquirer from "inquirer";
let quizQuestions = [
    {
        type: "list",
        name: "question1",
        message: "What is the capital of France?",
        choices: ["Paris", "London", "Berlin", "Madrid"],
    },
    {
        type: "list",
        name: "question2",
        message: "What is the largest planet in our solar system?",
        choices: ["Mars", "Jupiter", "Saturn", "Earth"],
    },
    {
        type: "list",
        name: "question3",
        message: "What is the largest mammal in the world?",
        choices: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
    },
    {
        type: "list",
        name: "question4",
        message: "What is the largest ocean on Earth?",
        choices: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
    },
    {
        type: "list",
        name: "question5",
        message: "What is the largest country by area?",
        choices: ["Russia", "Canada", "China", "United States"],
    },
    {
        type: "list",
        name: "question6",
        message: "What is the largest desert in the world?",
        choices: ["Sahara Desert", "Gobi Desert", "Antarctic Desert", "Arctic Desert"],
    },
    {
        type: "list",
        name: "question7",
        message: "What is the largest river in the world?",
        choices: ["Nile River", "Amazon River", "Yangtze River", "Mississippi River"],
    },
    {
        type: "list",
        name: "question8",
        message: "What is the largest island in the world?",
        choices: ["Greenland", "New Guinea", "Borneo", "Madagascar"],
    },
    {
        type: "list",
        name: "question9",
        message: "What is the largest city in the world?",
        choices: ["Tokyo", "Delhi", "Shanghai", "Mumbai"],
    },
    {
        type: "list",
        name: "question10",
        message: "What is the largest continent by population?",
        choices: ["Asia", "Africa", "Europe", "North America"],
    },
];
console.log("Quiz started!");
console.log("Please select the correct answer from the given options");
console.log("---------------------------------------------------");
async function runQuiz(quizQuestions) {
    const answers = await inquirer.prompt(quizQuestions);
    let score = 0;
    for (const key in answers) {
        if (answers[key] === "Paris") {
            score++;
        }
        if (answers[key] === "Jupiter") {
            score++;
        }
        if (answers[key] === "Blue Whale") {
            score++;
        }
        if (answers[key] === "Pacific Ocean") {
            score++;
        }
        if (answers[key] === "China") {
            score++;
        }
        if (answers[key] === "Sahara Desert") {
            score++;
        }
        if (answers[key] === "Nile River") {
            score++;
        }
        if (answers[key] === "Greenland") {
            score++;
        }
        if (answers[key] === "Tokyo") {
            score++;
        }
        if (answers[key] === "Asia") {
            score++;
        }
    }
    console.log(`Your score is ${score}/${quizQuestions.length}`);
    console.log("Quiz completed!");
    return score;
}
runQuiz(quizQuestions);

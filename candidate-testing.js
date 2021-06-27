const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = [
  "1) Who was the first American woman in space? " ,  
  "\n2) True or false: 5 kilometer == 5000 meters? ", 
  "\n3) (5 + 3)/2 * 10 = ? ", 
  "\n4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 
  "\n5) What is the minimum crew size for the ISS? "
  ];
let correctAnswers = [
  "Sally Ride", 
  "true", 
  "40", 
  "Trajectory", 
  "3"
  ];  
let candidateAnswers = []


function askForName(){
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("Candidate Name: ");
}


function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

for (let i = 0; i < 5; i++) {
  yourAnswers = input.question(questions[i]);
  candidateAnswers.push(yourAnswers);
   console.log(`Your Answer: ${candidateAnswers[i]}` + `\nCorrect Answer: ${correctAnswers[i]}`);
   }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
let grade = 0;

for (let i = 0; i < 5; i++) {
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      console.log("\ncorrect answer");
      grade = grade +1;
  } else {
    console.log("\nX incorrect answer");
    grade = grade + 0;
  } 
  console.log("Total Points: " + grade);
  }

let candidateScore = ((grade /5) * 100);
  console.log(candidateScore);

if (candidateScore >= 80) {
  console.log(">>> Overall Grade: " + candidateScore + "% <<<" + "\n>>> Status: PASSED <<< ");  
} else {
  console.log(">>> Overall Grade: " + candidateScore + "% <<<" + "\n>>> Status: FAILED <<<");
}

}
function runProgram() {
  
  askForName();
  // TODO 1.1c: Ask for candidate's name //

  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
  }; 
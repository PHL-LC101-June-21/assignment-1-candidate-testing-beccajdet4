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
  "2) True or false: 5 kilometer == 5000 meters? " , 
  "3) (5 + 3)/2 * 10 = ? " , 
  "4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? " , 
  "5) What is the minimum crew size for the ISS? "
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
yourAnswer1 = input.question("1) Who was the first American woman in space?");
yourAnswer2 = input.question("2) True or false: 5 kilometer == 5000 meters?");
yourAnswer3 = input.question("3) (5 + 3)/2 * 10 = ?");
yourAnswer4 = input.question("4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ");
yourAnswer5 = input.question("5) What is the minimum crew size for the ISS? ");
}


function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

for (let i = 0; i < 5; i++) {
   candidateAnswers.push(yourAnswer1, yourAnswer2, yourAnswer3, yourAnswer4, yourAnswer5);
   (console.log("\n" + questions[i] + "\nYour Answer:", candidateAnswers[i] + "\nCorrect Answer:", correctAnswers[i], "\n"));
 } 
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
let grade = 0;

for (let i = 0; i < 5; i++) {
    if (candidateAnswers[i] === correctAnswers[i]) {
    console.log("correct answer");
    grade = grade +1;
  } else {
    console.log("incorrect answer");
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
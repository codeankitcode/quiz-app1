let readlineSync = require("readline-sync")
let userName = readlineSync.question("What is your name? ")
console.log("Welcome " + userName + ", and wish you luck as you're going to play a quiz on 'Gangs of Wasseypur'")

console.log("Hint - You just have to type either 'a' or 'b'")
let score = 0

function play(question, answer){
  let userAns = readlineSync.question(question)
  if(userAns == answer){
    console.log("You're right")
    score ++
    console.log("current score:  " + score)
  }else(
    console.log("You're wrong")
  )
  console.log("total score: " + score)
}

let quizQues = [
  {
    question: "Who has played the role of Sardar Khan? Here are your options: (a)Piyush Mishra, (b)Manoj Bajpayee ",
    answer: "b"
  },
    {
    question: "Who has sung the song 'Ik bagal mai chand'? Here are your options: (a)Piyush Mishra, (b)Vineet Singh ",
    answer: "a"
  },  {
    question: "Who has played the role of Ramadhir Singh? Here are your options: (a)Anurag Kashyap, (b)Tigmanshu Dhulia ",
    answer: "b"
  },
    {
    question: "Who has appeared as band wala singer? Here are your options: (a)Yashpal Sharma, (b)Shakti Kapoor ",
    answer: "a"
  },
    {
    question: "Who has played the role of Thana Prabhari? Here are your options: (a)Faisal Malik, (b)Faisal Khan ",
    answer: "a"
  },  {
    question: "What is the name of Nawazuddin's character? Here are your options: (a)Definite, (b)Faisal Khan ",
    answer: "b"
  }
]

for(let i = 0; i <quizQues.length; i++){
  let render = quizQues[i]
  play(render.question, render.answer)
}

let highScore = [
  {
    name: "Ankit",
    score: 6
  }, {
    name: "Suman",
    score: 5
  }
]
function highScorer(){
  for(let i = 0; i< highScore.length; i++){
    let render = highScore[i]
    console.log("Previous High Scores: " + render.name+ " - " + render. score)
  }
}
highScorer()

console.log("If your score is more than this, please share your screenshot, so that I'll update.")
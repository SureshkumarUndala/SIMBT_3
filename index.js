const questionEl = document.querySelector(".question").children[0]
const ans_btn = document.querySelector("#answer_btn")
const nxt_btn = document.querySelector("#next_btn")
const homescreen = document.querySelector(".home_screen")
const startbtn = document.querySelector(".start")
const questionNum = document.getElementsByClassName("number")[0].firstElementChild
const answers_wrapper = document.querySelector(".answers")
const timeper_question = document.querySelector("#time")



function progress(value){
    const percentage = (value/time) * 100
    progressivebar.style.width = `${percentage}%`
    progressivebar.nextElementSibling.innerText = value   

}

const Questions = [
    {
    "question":"Which type of JavaScript language is ___",
     "answers":[
        {text:"Object-Oriented", correct:"false"},
        {text:"Object-Based", correct:"true"},
        {text:"Assembly-language", correct:"false"},
        {text:"High-level", correct:"false"},
     ]},
     {
        "question":"DOM stands for",
        "answers":[
           {text:"Document Object Model", correct:"true"},
           {text:"Document Object Machine", correct:"false"},
           {text:"Documnet Over Mountain", correct:"false"},
           {text:"Nothing", correct:"false"},
        ]
     },
     {
        "question":"Which one of the following is an ternary operator",
        "answers":[
           {text:"?", correct:"true"},
           {text:"+", correct:"false"},
           {text:"-", correct:"false"},
           {text:"/", correct:"false"},
        ]
     },
     {
        "question":"Which one of following keyword used to create object",
        "answers":[
           {text:"for", correct:"false"},
           {text:"new", correct:"true"},
           {text:"class", correct:"false"},
           {text:"None of above", correct:"false"},
        ]
     },
     {
        "question":"what is the difference between '=='and '==='",
        "answers":[
           {text:"checks datatype operands", correct:"false"},
           {text:"checks both datatype & value of the operands", correct:"true"},
           {text:"checks value of operands", correct:"false"},
           {text:"None of above", correct:"false"},
        ]
     },
     {
        "question":"which keyword used to create classes ",
        "answers":[
           {text:"new", correct:"false"},
           {text:"promise", correct:"false"},
           {text:"Class", correct:"true"},
           {text:"None of the above", correct:"false"},
        ]

     },
     {
        "question":"let a; console.log(a), what is the output",
        "answers":[
           {text:"Syntax Error", correct:"false"},
           {text:"Undefined", correct:"true"},
           {text:"Not Defined", correct:"false"},
           {text:"None of the above", correct:"false"},
        ]

     },
     {
        "question":"which property used to find array size",
        "answers":[
           {text:"length", correct:"true"},
           {text:"pop", correct:"false"},
           {text:"push", correct:"false"},
           {text:"None of the above", correct:"false"},
        ]

     },
     {
        "question":"which method used for debugging",
        "answers":[
           {text:"print()", correct:"false"},
           {text:"println()", correct:"false"},
           {text:"system.out.print()", correct:"false"},
           {text:"console.log()", correct:"true"},
        ]

     },
     {
        "question":"Which of the following is not a JavaScript Data Types?",
        "answers":[
           {text:"Number", correct:"false"},
           {text:"Undefined", correct:"false"},
           {text:"string", correct:"false"},
           {text:"Float", correct:"true"},
        ]
     },

   
]



let currentQuestionIndex = 0
let score = 0

function startQuiz(){
    homescreen.style.display = "none"
    document.querySelector(".hidequestions").style.display = "block"
    currentQuestionIndex = 0
    score = 0
    nxt_btn.innerHTML = "Next";
   showQuestion()


}


function showQuestion(){

    resetstate() //reset previous question and answers
   
    let currQuestion = Questions[currentQuestionIndex]
    let questionNo =  currentQuestionIndex + 1
    questionNum.innerText =  questionNo
    questionEl.innerText =  currQuestion.question
    
    currQuestion.answers.forEach(each_ans=>{
      const button =document.createElement("button")
      button.innerHTML = each_ans.text
      button.classList.add("btn");
      answers_wrapper.appendChild(button)
      if(each_ans.correct){
         button.dataset.correct = each_ans.correct
      }
     button.addEventListener("click", selectanswer)
    })


    }
 
function resetstate(){
   answers_wrapper.display = "none";
   while(answers_wrapper.firstChild){
      answers_wrapper.removeChild(answers_wrapper.firstChild)
   }

}

    function selectanswer(e){
      const selectBtn = e.target;
      const isCorrect = selectBtn.dataset.correct ==="true"
      if(isCorrect){
         selectBtn.classList.add("correct")
         score++
      }
      else{
         selectBtn.classList.add("incorrect")
      }
      Array.from(answers_wrapper.children).forEach(button =>{
         if(button.dataset.correct === "true"){
            button.classList.add("correct")
         }
      })
      
    }   

    function showscore(){
      resetstate()
      questionEl.innerHTML = `You scored ${score} out of ${Questions.length}!`
      nxt_btn.innerText = "Play Again"
    }

function handleNext(){
   currentQuestionIndex++;
   if(currentQuestionIndex < Questions.length){
      showQuestion()
   }
   else{
      showscore()
   }
}


    nxt_btn.addEventListener("click", ()=>{
      if(currentQuestionIndex < Questions.length){
         handleNext()
      }
      else{
         startQuiz()
      }
   })

startbtn.addEventListener("click",startQuiz)




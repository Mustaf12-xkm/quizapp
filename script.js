const questions = document.querySelector(".questions");
const optionlist = document.querySelector(".optionlist");

const option = document.querySelector(".option");
const timecnt = document.querySelector(".questiontime .time");
const nextbtn = document.querySelector(".nextbtn ");
const qindex = document.querySelector(".qindex");
const result = document.querySelector(".result");
const resulttext = document.querySelector(".result p");
const card = document.querySelector(".card");
const reply = document.querySelector(".reply");
const left = document.querySelector(".left");
reply.onclick = () => {
    card.classList.remove('hide')
    result.classList.remove('show')
     questionCount = 0;
queslength = 1;
 count;
 timevalue = 15
score= 0
questioncounter(queslength);
showQuestion(questionCount);
clearInterval(count)
timecount(timevalue)
nextbtn.style.display = "none"
left.textContent = "time left"
}
nextbtn.onclick = () => {
  if (questionCount < quizlist.length - 1) {
    questionCount++;
    queslength++;
    questioncounter(queslength);
    showQuestion(questionCount);
    clearInterval(count)
    timecount(timevalue)
    nextbtn.style.display = "none"
    left.textContent = "time left "
  } else {
    clearInterval(count)
    showresutlbox()
  }
};

let wrongcticon='<i class="fa-sharp fa-solid fa-xmark"></i>'
let correcticon ='<i class="fa-solid fa-check"></i>'
let questionCount = 0;
let queslength = 1;
let count;
let timevalue = 15
let score= 0
function showQuestion(index) {
  let currentquestion = quizlist[questionCount];

  questions.innerHTML = `${currentquestion.id}:   ${currentquestion.question}`;
  optionlist.innerHTML = "";
  currentquestion.option.forEach((element) => {
    optionlist.innerHTML += `  <div class="option">
        <span>${element}</span>
     
    </div>`;
  });
  const optionbtn = document.querySelectorAll(".option");

  optionbtn.forEach((element) => {
    element.setAttribute("onclick", "optionselected(this)");
  });
}
showQuestion(questionCount);

function questioncounter(index) {
  qindex.innerHTML = `${index} <span>of</span> ${quizlist.length} `;
}
questioncounter(queslength);

function optionselected(answer) {
    clearInterval(count)
  let useranswer = answer.textContent.trim();
  let correct = quizlist[questionCount].correctanswer.trim();
let alloptions = optionlist.children.length
  if (useranswer === correct) {
    score +=1
    answer.classList.add("correct")
    answer.insertAdjacentHTML("beforeend", correcticon)
  } else {
    answer.classList.add("incorrect")
    answer.insertAdjacentHTML("beforeend", wrongcticon)
    for(let i = 0; i <alloptions; i++){
      if(optionlist.children[i].textContent.trim()==correct){
        optionlist.children[i].setAttribute("class","option correct")
        optionlist.children[i].insertAdjacentHTML("beforeend", correcticon)
      }
      }
  }

  for(let i = 0; i < alloptions; i++){
    optionlist.children[i].classList.add("disabled")
  }
  nextbtn.style.display = "block"
}
timecount(15)

function timecount(time){
    count=setInterval(timer,1000)
    function timer(){
        timecnt.textContent=time
        time--

        if(time<9){
            let addzero=timecnt.textContent
            timecnt.textContent="0"+addzero
        }
        if(time < 0){
            clearInterval(count)
            timecnt.textContent='00'
            let correct = quizlist[questionCount].correctanswer.trim();
            let alloptions = optionlist.children.length
            for(let i = 0; i <alloptions; i++){
                if(optionlist.children[i].textContent.trim()==correct){
                  optionlist.children[i].setAttribute("class","option correct")
                  optionlist.children[i].insertAdjacentHTML("beforeend", correcticon)
                }
                }
                for(let i = 0; i < alloptions; i++){
                    optionlist.children[i].classList.add("disabled")
                  }
                  nextbtn.style.display = "block"
                  left.textContent = "time off"
        }
    }
    
}

function showresutlbox(){
    card.classList.add('hide')
    result.classList.add('show')
if(score >7){
    resulttext.innerHTML=`you have completed this quiz <br>and concrats!🙌 you got ${score} out ${quizlist.length}`
}
else if(score >4){
    resulttext.innerHTML=`you have completed this quiz <br>and nice👌 you got ${score} out ${quizlist.length}`
}
else{
    resulttext.innerHTML=`you have completed this quiz <br>and sorry😛 you got ${score} out ${quizlist.length}`
}

}



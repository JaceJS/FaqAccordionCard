const questionBtn = document.getElementsByClassName("accordion-question");
const questionAnswer = document.querySelectorAll(".question p");
const arrowImg = document.getElementsByClassName("arrow");

for (let i = 0; i < questionBtn.length; i++) {
  questionBtn[i].addEventListener("mouseenter", (e) => {
    questionBtn[i].style.color = "orange";
  });
}

for (let i = 0; i < questionBtn.length; i++) {
  questionBtn[i].addEventListener("mouseleave", (e) => {
    questionBtn[i].style.color = "black";
  });
}

let j = 1;
for (let i = 0; i < questionBtn.length; i++) {
  questionBtn[i].addEventListener("click", (e) => {
    if(j%2 != 0){
      questionBtn[i].classList.add("open");
      questionAnswer[i].style.display = "block";
      arrowImg[i].style.transform = "rotateX(180deg)";
      j++;
    }
    else{
      questionBtn[i].classList.remove("open");
      questionAnswer[i].style.display = "none";
      arrowImg[i].style.transform = "rotateX(360deg)";
      j++;
    }
  });
}


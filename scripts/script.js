const date = new Date().toLocaleDateString("en-US", {
  weekday: "short",
  year: "numeric",
  month: "long",
  day: "numeric",
});

const dateSplit = date.split(",");


document.getElementById("date").innerHTML =
  `${dateSplit[0]} , <br> <strong>${dateSplit[1]}</strong>  <strong>${dateSplit[2]}</strong>`;

  const now = new Date();
  const options = {
    timeZone: "Asia/Dhaka",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  };
  const currentTime = new Intl.DateTimeFormat("en-BD", options).format(now);


function getRandomColor(){
  const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    newColor =  r * 0.299 + g * 0.587 + b * 0.114
    if(newColor > 186) {
        newColor = 'black';
    } else {
        newColor = 'white';
    }
    return `rgb(${r}, ${g}, ${b})`;
}


document.getElementById("theme-change").addEventListener("click", function() {
  document.body.style.backgroundColor = getRandomColor();
});
const taskCount = document.getElementById("task-count");
let cardBtns = document.querySelectorAll(".card-btn");
const activitySection = document.getElementById("activity-section");

const taskRemain = document.querySelector(".task-left");
for(let cardBtn of cardBtns){
  cardBtn.addEventListener("click", function(){
    alert("The board has been updated Successfully");
    // cardBtn.setAttribute('disabled');
    cardBtn.disabled = true;
    cardBtn.style.backgroundColor = "grey";
    
    

    let taskCounter = parseInt(taskCount.innerText);
    taskCount.innerText = taskCounter + 1;
    let a = parseInt(taskRemain.innerText);
    taskRemain.innerText = a - 1;
    if(a === 1){
      alert("Congrats!!! All of the tasks has been completed")
    }
    const card = cardBtn.closest(".card");
    let activity = document.createElement("p");
    const cardTitle = card.querySelector(".card-title");
    activity.classList.add("bg-bg-main", "rounded-lg", "p-3" , "mb-4", "text-left");
    activity.innerText=`You have Complete The Task ${cardTitle.innerText} at ${currentTime}`;
    activitySection.appendChild(activity);
    
  });

}


document.getElementById("clear-btn").addEventListener("click" , function(){
  const gonnaBeClear = document.getElementById("activity-section");
  const paras = gonnaBeClear.querySelectorAll("p")

  for(let para of paras)
    para.remove();
});





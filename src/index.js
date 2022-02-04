document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const textBox = document.getElementById("new-task-description");
  const ul = document.getElementById("tasks");
  const form = document.getElementById("create-task-form");
  
  form.addEventListener("submit", logsubmit);
  
  function logsubmit(event){
    event.preventDefault();
    submitButton();
  }
  function submitButton(){
    let li = document.createElement("LI");
    li.innerHTML = textBox.value;
    let button = document.createElement("button");
    button.innerHTML = "x";
    button.addEventListener('click',() =>{
      li.remove();
    });
    li.appendChild(button)
    ul.appendChild(li);
  }
});


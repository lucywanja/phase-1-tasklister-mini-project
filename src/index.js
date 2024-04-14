document.addEventListener("DOMContentLoaded", () => {
  // grab all the DOM ELEMENTS
  // your code here

  // set the newtaskform to a variable
  const newTaskForm = document.querySelector("form");
  //console.log(document.querySelector("form"));..To seee we have the correct form

  // attach an event listener to the newtaskform
  newTaskForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    // create a variable to hold the value of the targeted input
    const newToDo = e.target.querySelector("#new-task-description").value

    // pass in the newToDo variable as an arguement to buildToDo
    buildToDo(newToDo);

    // after buildToDo runs ,reset the newTaskForm so that the input is empty
    newTaskForm.reset();

  })
});
// when user submits , we pass in the targeted input into buildToDo function
function buildToDo(newToDo){
  // first, the  buildToDo function  create an li element and a button element.
  const taskLi = document.createElement("li");
  const deleteButton = document.createElement("button");

  // next we set the tetxContent of the button element
  deleteButton.textContent = "x";

  // after, we set the textContent of the li elemet to the todo parameter.
  // remember when we sumit, we are passing in targeted input into the parameters.
  taskLi.textContent = newToDo;

  // next, we append the new btn to the li.
  taskLi.appendChild(deleteButton);

  // then add the li elemet to the ul element of tasks
  document.querySelector('#tasks').appendChild(taskLi);

  // finally , we attach a click event listener to the btn which invokes the handleDelete function
  deleteButton.addEventListener("click", handleDelete);
}

// when the button elememnt with the textContent of 'x' is clicked, this function will run.
function handleDelete(e){
  // this function targets the parent node of the button and removes it.
  // in this case, the parentNode of the button is the li element. so the li element is removed from the list.
  e.target.parentNode.remove()
}
console.log("hello");


// git init
// git and remote
// git status
// git add .
// git commit -m "message here"
// git push

function addTask() {
    const newTask = document.createElement("li")
    const tasklist = document.getElementById("tasklist")
    tasklist.appendChild(newTask)
    newTask.textContent = document.getElementById("inputTask").value
    document.getElementById("inputTask").value = ""    // To make input section empty
    deleteTask(newTask)
}

function deleteTask(newTask) {
    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete"
    newTask.appendChild(deleteBtn)
    deleteBtn.onclick = function(){
        newTask.remove()
    }
}

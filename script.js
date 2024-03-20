const taskName = document.querySelector("#taskName")
const btn = document.querySelector("#btn")
const ulElementList = document.querySelector("#ulElementList")

let tasks = []

function addTask() {
    let taskNameValue = taskName.value.trim();

    if (taskNameValue !== "") {
        tasks.push(taskNameValue)
        taskName.value = ""
        renderTask()
    }
}

function removeTask(index) {
    tasks.splice(index, 1)
    renderTask()
}

function editTask(task, liElement, index) {
    let nowaNazwa = prompt("Zmień nazwę", task)
    if (nowaNazwa !== null) {
        tasks[index] = nowaNazwa
        renderTask()
    }
}

function truncateTaskName(taskName) {
    if (taskName.length > 5) {
        return taskName.substring(0, 5) + "..."
    }
    return taskName
}

function renderTask() {
    ulElementList.innerHTML = "";

    tasks.forEach((task, index) => {
        let liElement = document.createElement("li")
        let removeBtn = document.createElement("button")
        let editBtn = document.createElement("button")

        liElement.textContent = truncateTaskName(task)
        removeBtn.textContent = "remove"
        editBtn.textContent = "edit"

        removeBtn.addEventListener('click', () => {
            removeTask(index)
        })

        editBtn.addEventListener('click', () => {
            editTask(task, liElement, index)
        })

        ulElementList.appendChild(liElement)
        liElement.appendChild(removeBtn)
        liElement.appendChild(editBtn)
    })
}

btn.addEventListener('click', function () {
    addTask()
})

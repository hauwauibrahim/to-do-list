const completedCountDisplay = document.getElementById('completedCount');
const incompleteCountDisplay = document.getElementById('incompleteCount');
let completedCount = 0;
let incompleteCount = 0;

document.querySelector('#push').onclick = function() {
    const inputField = document.querySelector('#newtask input');
    const taskValue = inputField.value.trim();

    if (taskValue.length == 0) {
        alert("Please Enter a Task");
    } else {
        const taskList = document.querySelector('#tasks');
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        taskDiv.innerHTML = `
            <span id="taskname">${taskValue}</span>
            <span class="status">Uncompleted</span>
            <button class="complete"><i class="fas fa-check"></i></button>
            <button class="delete"><i class="far fa-trash-alt"></i></button>
        `;
        taskList.appendChild(taskDiv);
        inputField.value = "";
        incompleteCount++;
        incompleteCountDisplay.innerText = incompleteCount;

        taskDiv.querySelector('.complete').onclick = function() {
            taskDiv.classList.toggle('completed');
            const statusSpan = taskDiv.querySelector('.status');
            if (taskDiv.classList.contains('completed')) {
                completedCount++;
                incompleteCount--;
                statusSpan.innerText = "Completed";
            } else {
                completedCount--;
                incompleteCount++;
                statusSpan.innerText = "Uncompleted";
            }
            completedCountDisplay.innerText = completedCount;
            incompleteCountDisplay.innerText = incompleteCount;
        }

        taskDiv.querySelector('.delete').onclick = function() {
            if (taskDiv.classList.contains('completed')) {
                completedCount--;
            } else {
                incompleteCount--;
            }
            taskList.removeChild(taskDiv);
            completedCountDisplay.innerText = completedCount;
            incompleteCountDisplay.innerText = incompleteCount;
        }
    }
}

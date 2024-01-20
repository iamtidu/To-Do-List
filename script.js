function addTask() {
    var inputdata = document.getElementById("inputdata");
    var taskValue = inputdata.value;
    if (taskValue.trim() !== "") {
        var li = document.createElement("li");
        li.innerHTML = `
            <div>${taskValue}</div>
            <button onclick="removeTask(this)">X</button>  
        `;
        document.getElementById("taskList").appendChild(li);
        inputdata.value = "";
    }
}
function removeTask(button) {
    var li = button.parentNode;
    li.parentNode.removeChild(li);
}
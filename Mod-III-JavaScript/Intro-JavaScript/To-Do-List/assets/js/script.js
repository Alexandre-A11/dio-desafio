const inputContent = document.getElementById("input-add");
const tasks = document.querySelector(".show-tasks");
const btnAdd = document.getElementById("btn-add");

const addTasks = function () {
    if (inputContent.value !== "") {
        const taskName = inputContent.value;
        const div = document.createElement("div");

        // Create Checkbox ☑
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        // Create Label 🏷
        const label = document.createElement("label");
        label.appendChild(document.createTextNode(taskName));

        // Append Checkbox/Label to Div.
        div.appendChild(checkbox);
        div.appendChild(label);
        tasks.appendChild(div);
    }
};

btnAdd.addEventListener("click", addTasks);

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTasks();
    }
});

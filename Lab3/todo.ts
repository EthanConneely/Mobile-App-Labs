let todos: string[] = ["A", "B", "C"]

/*
(b) Create an addTask function:
    i. It receives a string as a parameter called task.
    ii. It adds the task to the array.
    iii. It prints a message in the console indicating the insertion.
    iv. It returns the number of elements in the array after the insertion.

(c) Create a listAllTasks function:
    i. It iterates over all the tasks in the array.
    ii. It prints each array item in the console.

(d) Create a deleteTask function:
    i. It receives a string as a parameter called task.
    ii. It removes that string from the array.
    iii. It prints in console a message indicating the deletion.
    iv. It returns the number of elements in the array after the deletion
*/

function addTask(task: string): number {
    todos.push(task);
    console.log("added Task to todos!");

    return todos.length;
}

function listAAllTasks() {
    for (let i = 0; i < todos.length; i++) {
        const element = todos[i];
        console.log(element);
    }
}

function deleteTask(task: string) {
    let index = todos.indexOf(task)
    todos.splice(index, 1)
}

deleteTask("B");

console.log(todos);

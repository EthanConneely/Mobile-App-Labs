/*
(a) An array of strings.

(b) An addTask function which:
    i. Recieves a string as a parameter.
    ii. Prints a message in the console indicating the insertion.
    iii. Returns the number of elements in the array after the insertion.

(c) A listAllTasks function which:
    i. Prints in the console all the tasks of the list.

(d) A deleteTask function which:
    i. Recieves a string as a parameter.
    ii. Prints a message in the console indicating the deletion.
    iii. Returns the number of elements in the array after the deletion.

*/

interface ITodoList {
    addTask(task: string): number;
    listAAllTasks();
    deleteTask(task: string);
}

class TodoList implements ITodoList {
    todos: string[] = []

    addTask(task: string): number {
        console.log("added Task to todos!");
        return this.todos.push(task);
    }

    listAAllTasks() {
        for (let i = 0; i < this.todos.length; i++) {
            const element = this.todos[i];
            console.log(element);
        }
    }

    deleteTask(task: string) {
        let index = this.todos.indexOf(task)
        this.todos.splice(index, 1)
    }
}

let todoList = new TodoList();

todoList.addTask("A")
todoList.addTask("B")
todoList.addTask("C")
todoList.addTask("D")

todoList.listAAllTasks();

todoList.deleteTask("C");

todoList.listAAllTasks();

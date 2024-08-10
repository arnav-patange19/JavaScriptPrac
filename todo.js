var todos = [
  {
    id: 1,
    title: "Complete project proposal",
    description: "Write and submit the project proposal for the new client",
    due_date: "2024-08-15",
    priority: "high",
    status: "in-progress",
  },
  {
    id: 2,
    title: "Team meeting",
    description: "Weekly sync-up with the design team",
    due_date: "2024-08-12",
    priority: "medium",
    status: "pending",
  },
  {
    id: 3,
    title: "Code review",
    description: "Review the code for the latest feature branch",
    due_date: "2024-08-14",
    priority: "high",
    status: "pending",
  },
  {
    id: 4,
    title: "Prepare presentation",
    description: "Create slides for the upcoming client meeting",
    due_date: "2024-08-16",
    priority: "medium",
    status: "not-started",
  },
  {
    id: 5,
    title: "Update website",
    description: "Update the portfolio section with recent projects",
    due_date: "2024-08-20",
    priority: "low",
    status: "not-started",
  },
];

function getAllTodos() {
  var response = {
    hello: todos,
  };
  return response;
}
var id;
function getTodoById(id) {
  var ToDo = {
    hello: todos[id - 1],
  };
  return ToDo;
  //write code to call id 4
}
var todo;
var new_todo;
function addToDo(new_todo) {
  todos.push(new_todo);
  //add new todo
}
new_todo = {
  new_id: "6",
  new_name: "arnav",
};

function deleteToDo(id) {
  todos.splice([id - 1], 1);
  //delete todo
}
todo = {
  valuex: "specified",
  win: "yes",
};
function updateToDo(id, todo) {
  todos[id - 1] = todo; //here todo is the todo which contains updated value
}
// Main Methods
console.log(getTodoById(4)); //printing todo by id
addToDo(new_todo); //added new todo specified above
deleteToDo(4); //removed todo with id 4
console.log(getAllTodos()); //printing all todos
updateToDo(4, todo);
console.log(getAllTodos());

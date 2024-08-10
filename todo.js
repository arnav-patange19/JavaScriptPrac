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
  for (let a = 0; a < todos.length; a++) {
    if (todos[a].id == id) {
      return todos[a];
    }
  }
  console.log("invalid");

  //write code to call id 4
}
var todo;
var newToDo;
function addToDo(newToDo) {
  todos.push(newToDo);
}

function deleteToDo(id) {
  for (let b = 0; b < todos.length; b++) {
    if (todos[b].id == id) {
      todos.splice(b, 1);
      break;
    }
  }
  console.log("id is invalid");
  //delete todo
}
todo = {
  valuex: "specified",
  win: "yes",
};
function updateToDo(id, todo) {
  for (let c = 0; c < todos.length; c++) {
    if (todos[c].id == id) {
      todos[c] = todo;
      return 0;
    }
  }
  console.log("invalid id");
  //here todo is the todo which contains updated value
}
// Main Methods
// console.log(getTodoById(400)); //printing todo by id
// addToDo(newToDo); //added new todo specified above
// console.log(getAllTodos()); //printing all todos
// deleteToDo(3); //removed todo with id 4
// console.log(getAllTodos());
// updateToDo(5, todo);
// console.log(getAllTodos());

// Get All Todos
var allTodos = getAllTodos();
console.log(allTodos.hello.length);

// Adding A New Todo

var newToDo = {
  id: 675,
  title: "New Task",
  description: "This is a new task",
  due_date: "2024-08-25",
  priority: "low",
  status: "not-started",
};

var added = addToDo(newToDo);
console.log(getAllTodos());

// Get Todo by Id
var todoById = getTodoById(675);
console.log(todoById);

// Delete Todo By Id
var deleted = deleteToDo(675);
console.log(getAllTodos());

// Check if the todo is deleted
console.log(getTodoById(675));

// Add a new todo with duplicate id
var newToDo = {
  id: 1,
  title: "Duplicating..",
  description: "This is a new task",
  due_date: "2024-08-25",
  priority: "low",
  status: "not-started",
};

var added = addToDo(newToDo);
console.log(getAllTodos());
// TODO: ^ This should fail. The id is already present in the todos array.

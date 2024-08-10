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
    todos: todos,
  };
  return response;
}

// Main Methods

allTodos = getAllTodos();
console.log(allTodos);

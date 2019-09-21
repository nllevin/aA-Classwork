const todos = JSON.parse(localStorage.getItem("todos")) || [];
const todosUl = document.getElementsByClassName("todos")[0];
const todoForm = document.getElementsByClassName("add-todo-form")[0];

const addTodo = function() {
  const todoInput = document.getElementsByName("add-todo")[0];
  todos.push({
    name: todoInput.value,
    done: false
  });
  todoInput.value = "";
  populateList(todos);
  localStorage.setItem("todos", JSON.stringify(todos));
};

const populateList = function(todos) {
    todosUl.innerHTML = "";

    todos.forEach( (todo, idx) => {
        const label = document.createElement("label");
        label.innerHTML = todo.name;

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.dataset.id = idx;
        checkbox.checked = todo.done;

        const li = document.createElement("li");
        li.appendChild(checkbox);
        li.appendChild(label);

        todosUl.appendChild(li);
    });
};

todoForm.addEventListener("submit", event => {
    event.preventDefault();
    addTodo();
});

todosUl.addEventListener("click", event => {
    const target = event.target;
    if (target instanceof HTMLInputElement) {
        todos[target.dataset.id].done = target.checked;
        localStorage.setItem("todos", JSON.stringify(todos));
    }
});

populateList(todos);
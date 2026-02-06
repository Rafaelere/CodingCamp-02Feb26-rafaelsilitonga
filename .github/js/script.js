let todos = [];
let filterActive = false; 


function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoDate = document.getElementById('todo-date');

    if (todoInput.value.trim() === '' || todoDate.value === '') {
        alert('Please enter both a todo item and a due date.');
        return;
    }

    const newTodo = {
        id: Date.now(), 
        todo: todoInput.value.trim(),
        date: todoDate.value,
        completed: false
    };

    todos.push(newTodo);
    todoInput.value = '';
    todoDate.value = '';

    renderTodos();
}


function renderTodos(data = todos) {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    // If the filtered list is empty
    if (data.length === 0) {
        todoList.innerHTML = '<li>No todos found</li>';
        return;
    }

    data.forEach((item) => {
        todoList.innerHTML += `
        <li class="flex justify-between items-center mb-2">
            <p class="text-2xl ${item.completed ? 'line-through opacity-50' : ''}">
                ${item.todo} <span class="text-sm text-gray-500">(${item.date})</span>
            </p>
            <button onclick="toggleTodo(${item.id})" class="ml-4 text-xs bg-gray-200 p-1 rounded">
                ${item.completed ? 'Undo' : 'Done'}
            </button>
        </li>`;
    });
}


function deleteTodo(id) {
    todos = todos.filter(t => t.id !== id);
    renderTodos();
}


function toggleTodo(id) {
    todos = todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
    renderTodos();
}


function deleteAllTodos() {
    if (confirm("Are you sure you want to clear the entire list?")) {
        todos = [];
        renderTodos();
    }
}


function filterTodos() {
    let filterActive = false; 

function filterTodos() {
    filterActive = !filterActive; 
    
    const filterBtn = document.querySelector('button:last-of-type'); 
    
    if (filterActive) {
        
        const pendingTodos = todos.filter(item => !item.completed);
        
        
        filterBtn.innerText = "Show All";
        filterBtn.classList.replace('bg-blue-500', 'bg-indigo-600');
        
        renderTodos(pendingTodos);
    } else {
        
        filterBtn.innerText = "Filter Todos";
        filterBtn.classList.replace('bg-indigo-600', 'bg-blue-500');
        
        renderTodos(todos);
    }
}
    }

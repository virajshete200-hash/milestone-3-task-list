const STORAGE_KEY = 'practice-tasks';

const DEFAULT_TASKS = [
  'Complete HTML structure',
  'Design the task list using CSS',
  'Implement Add Task functionality',
  'Implement Delete Task functionality',
  'Add Local Storage functionality',
  'Test task saving after page refresh',
  'Fix JavaScript errors',
  'Test all application features',
  'Prepare project documentation',
  'Submit Milestone 3'
];

const form = document.getElementById('form');
const input = document.getElementById('text');
const list = document.getElementById('list');
const message = document.getElementById('message');
const count = document.getElementById('task-count');
const emptyState = document.getElementById('empty-state');

function loadTasks() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === null) {
      // Preload example tasks on the first visit so the app is ready to demonstrate.
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_TASKS));
      return [...DEFAULT_TASKS];
    }

    const parsed = JSON.parse(saved);
    return Array.isArray(parsed)
      ? parsed.filter(task => typeof task === 'string')
      : [];
  } catch (error) {
    return [...DEFAULT_TASKS];
  }
}

let tasks = loadTasks();

function saveTasks() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    return true;
  } catch (error) {
    message.textContent = 'Browser storage is unavailable. Your latest changes may not remain after refresh.';
    return false;
  }
}

function renderTasks() {
  list.replaceChildren();

  tasks.forEach((task, index) => {
    const item = document.createElement('li');
    item.className = 'task-item';

    const taskText = document.createElement('span');
    taskText.className = 'task-text';
    taskText.textContent = task;

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'Delete';
    deleteButton.setAttribute('aria-label', `Delete task: ${task}`);
    deleteButton.addEventListener('click', () => deleteTask(index));

    item.append(taskText, deleteButton);
    list.append(item);
  });

  count.textContent = `${tasks.length} ${tasks.length === 1 ? 'task' : 'tasks'}`;
  emptyState.hidden = tasks.length > 0;
}

function addTask(value) {
  const task = value.trim();

  if (!task) {
    message.textContent = 'Please enter a task before adding.';
    input.focus();
    return;
  }

  tasks.push(task);
  const saved = saveTasks();
  renderTasks();
  input.value = '';
  message.textContent = saved ? 'Task added successfully.' : 'Task added for this session, but could not be saved.';
  input.focus();
}

function deleteTask(index) {
  if (!Number.isInteger(index) || index < 0 || index >= tasks.length) return;

  tasks.splice(index, 1);
  const saved = saveTasks();
  renderTasks();
  message.textContent = saved ? 'Task deleted successfully.' : 'Task deleted for this session, but could not be saved.';
}

form.addEventListener('submit', event => {
  event.preventDefault();
  addTask(input.value);
});

renderTasks();

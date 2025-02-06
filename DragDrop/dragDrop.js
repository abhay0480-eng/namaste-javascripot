const tasks = document.querySelectorAll('.task');
let draggedTask = null;

tasks.forEach(task => {
  task.addEventListener('dragstart', (e) => {
    draggedTask = task;
    e.dataTransfer.effectAllowed = 'move';
  });

  task.addEventListener('dragover', (e) => {
    e.preventDefault(); // Allow dropping
    task.classList.add('drag-over');
  });

  task.addEventListener('dragleave', () => {
    task.classList.remove('drag-over');
  });

  task.addEventListener('drop', () => {
    task.classList.remove('drag-over');
    if (draggedTask !== task) {
      const taskList = document.getElementById('taskList');
      const currentTask = task;
      taskList.insertBefore(draggedTask, currentTask);
    }
  });
});
const taskForm = document.querySelector('.task-form')
const taskInput = document.querySelector('.task-add-text')
const taskList = document.querySelector('.tasks-list')

taskForm.addEventListener('submit', (event) => {
	event.preventDefault()

	const taskText = taskInput.value

	const taskHTML = `
		<li class="task">
			<span class="task-text">
				${taskText}
			</span>
			<button data-action="done" class="task-complete-button">
				Выполнена
			</button>
			<button data-action="delete" class="task-delete-button">
				Удалить
			</button>
		</li>
	`
	taskList.insertAdjacentHTML('beforeend', taskHTML)

	taskInput.value = ''
	taskInput.focus()
})

taskList.addEventListener('click', (event) => {
	if(event.target.dataset.action === 'delete') {
		const parenNode = event.target.closest('.task')
		parenNode.remove()
	}
})

taskList.addEventListener('click', (event) => {
	if(event.target.dataset.action === 'done') {
		const parenNode = event.target.closest('.task')
		parenNode.classList.toggle('task--completed')
	}
})
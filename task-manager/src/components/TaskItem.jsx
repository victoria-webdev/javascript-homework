function TaskItem({ task, onToggle, onDelete }) {
    return (
        <li>
            {task.title} — {task.completed ? 'Выполнена' : 'Не выполнена'}
            {' '}
            <button onClick={() => onToggle(task.id)}>
                Изменить статус
            </button>
            {' '}
            <button onClick={() => onDelete(task.id)}>
                Удалить
            </button>
        </li>
    )
}

export default TaskItem
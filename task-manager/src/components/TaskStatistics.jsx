function TaskStatistics({ totalTasks, completedCount }) {
    return (
        <div>
            <p>Всего задач: {totalTasks}</p>
            <p>Выполнено: {completedCount}</p>
        </div>
    )
}

export default TaskStatistics
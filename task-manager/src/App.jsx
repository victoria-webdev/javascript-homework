import {useState} from 'react'
import Header from './components/Header.jsx'
import {initialTasks} from './data/tasks'
import TaskStatistics from './components/TaskStatistics'
import TaskList from './components/TaskList'
import Footer from './components/Footer'
import './App.css'

function App() {
    const [tasks, setTasks] = useState(initialTasks)

    const toggleTask = (id) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id
                    ? {...task, completed: !task.completed}
                    : task
            )
        )
    }

    const deleteTask = (id) => {
        setTasks((prevTasks) =>
            prevTasks.filter((task) => task.id !== id)
        )
    }

    const deleteCompleted = () => {
        setTasks((prevTasks) =>
            prevTasks.filter((task) => !task.completed)
        )
    }

    const addTask = () => {
        setTasks((prevTasks) => [
            ...prevTasks,
            {
                id: Date.now(),
                title: 'New task',
                completed: false
            }
        ])
    }

    const clearTasks = () => {
        setTasks([])
    }

    const totalTasks = tasks.length
    const completedCount = tasks.filter((task) => task.completed).length

    return (
        <>
            <div>
                <Header/>
                <TaskStatistics
                    totalTasks={totalTasks}
                    completedCount={completedCount}
                />

                <button onClick={addTask}>Добавить задачу</button>
                {tasks.length > 0 && (
                    <button onClick={clearTasks}>Очистить список</button>
                )}

                <button onClick={deleteCompleted}>
                    Удалить выполненные
                </button>

                <TaskList
                    tasks={tasks}
                    onToggle={toggleTask}
                    onDelete={deleteTask}
                />

                <Footer/>

            </div>
        </>
    )
}

export default App
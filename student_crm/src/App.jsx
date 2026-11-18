// import './App.css'
import { useState } from 'react';
import Header from './components/Header.jsx';
import StudentList from './components/StudentList.jsx';
import { students as initialStudents } from './data/students.js';
import Footer from './components/Footer.jsx';

function App() {
    const [students, setStudents] = useState(initialStudents);

    function addStudent() {
        const newStudent = {
            id: crypto.randomUUID(),
            name: "New Student",
            age: 20,
            group: "React Basics",
            isActive: true
        };

        setStudents([...students, newStudent]);
    }

    return (
    <>
        <Header />

        <main className="main-content">
            <button onClick={addStudent}>
                Добавить студента
            </button>
            <StudentList students={students} />
        </main>

        <Footer />

    </>
  )
}

export default App

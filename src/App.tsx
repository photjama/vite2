/*import { useState } from 'react'
import './App.css'

// Dummy CounterScore component
function CounterScore({ count }: { count: number }) {
  return <div>Score: {count}</div>;
}

// Dummy CounterInc component
function CounterInc({ onIncrement }: { onIncrement: () => void }) {
  return <button onClick={onIncrement}>Increment</button>;
}

// Dummy CounterDec component
function CounterDec({ onDecrement }: { onDecrement: () => void }) {
  return <button onClick={onDecrement}>Decrement</button>;
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div>
        <CounterScore count={count} />
        <CounterInc onIncrement={() => setCount(count + 1)} />
        <CounterDec onDecrement={() => setCount(count - 1)} />
        <p>Current count: {count}</p>
      </div>
      
    </>
  )
}

export default App*/

/*import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";


const App: React.FC = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;*/

import React from "react";
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";
import CourseDrop from "./components/CourseDrop";
import GPA from "./components/GPA";
import { Book, Layers, Trash2 } from "react-feather";
import "./App.css";

const App: React.FC = () => (
  <div>
    <header><h1>📚 ระบบถอนรายวิชา</h1></header>

    <div className="layout">
      <div className="left-column">
        <section><h2><Book /> เพิ่มรายวิชา</h2><CourseForm /></section>
        <section><h2><Trash2 /> รายวิชาที่ถอนแล้ว</h2><CourseDrop /></section>
      </div>

      <div className="right-column">
        <h2><Layers /> รายวิชาที่ลงทะเบียน</h2>
        <CourseList />
      </div>
    </div>

    <div className="gpa-section">
      <GPA />
    </div>
  </div>
);

export default App;
















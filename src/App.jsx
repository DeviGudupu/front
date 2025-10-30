<<<<<<< HEAD
import { useEffect, useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // Fetch all tasks on mount
  useEffect(() => {
    fetch("http://localhost:3001/tasks")
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  // Add new task
  const addTask = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newTask = { content: input, completed: false };
    const res = await fetch("http://localhost:3001/tasks", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newTask)
    });
    const added = await res.json();
    setTasks([...tasks, added]);
    setInput("");
  };

  // Toggle complete
  const toggleTask = async (id, completed) => {
    await fetch(`http://localhost:3001/tasks/${id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({completed: !completed})
    });
    setTasks(tasks.map(t => t.id === id ? {...t, completed: !completed} : t));
  };

  // Delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:3001/tasks/${id}`, { method: "DELETE" });
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="flex flex-col items-center p-6 min-h-screen bg-gray-50">
      <form onSubmit={addTask} className="flex gap-2 mb-6">
        <input
          className="border rounded px-3 py-2 outline-none"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
          Add
        </button>
      </form>
      <div className="w-full max-w-md">
        {tasks.length === 0 && (
          <div className="text-center text-gray-400">No tasks found</div>
        )}
        <ul>
          {tasks.map(task => (
            <li
              key={task.id}
              className={`flex items-center justify-between bg-white my-2 p-3 shadow rounded ${
                task.completed ? "opacity-50 line-through" : ""
              }`}
            >
              <span onClick={() => toggleTask(task.id, task.completed)} className="cursor-pointer w-full">
                {task.content}
              </span>
              <button
                className="ml-4 text-red-500 hover:text-red-700"
                onClick={() => deleteTask(task.id)}
                aria-label="Delete"
              >
                🗑️
              </button>
            </li>
          ))}
        </ul>
=======
import React, { useState } from 'react';
import { BookList } from './modules/BookList.jsx';
import { addToCart, removeFromCart, getCartTotal } from './modules/CartManager.jsx';
import { CartUI } from './modules/CartUI.jsx';
import booksData from './data/books.json';

function App() {
  const [cart, setCart] = useState([]);
  
  const handleAddToCart = (book) => {
    setCart(cart => addToCart(cart, book));
  };
  const handleRemoveFromCart = (bookId) => {
    setCart(cart => removeFromCart(cart, bookId));
  };
  const handleCheckout = () => {
    alert('Order placed! (Mock checkout)');
  };
  
  return (
    <div>
      <BookList books={booksData} onAddToCart={handleAddToCart} />
      <CartUI cart={cart} onRemove={handleRemoveFromCart} onCheckout={handleCheckout} />
      <div>
        <h3>Total: ₹{getCartTotal(cart)}</h3>
>>>>>>> e53a7442d0ee1a6009b810fcccbe40e984565649
      </div>
    </div>
  );
}
<<<<<<< HEAD
=======

export default App;

>>>>>>> e53a7442d0ee1a6009b810fcccbe40e984565649

import React from 'react';
import './App.css';
import Header from './components/Header';
import InputTodo from './components/InputTodo';

export default function App() {
  return (
    <div className="App">
      <Header />
      <InputTodo />
    </div>
  );
}

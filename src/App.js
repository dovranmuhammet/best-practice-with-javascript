import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

let numbers = [1, 3, 9, 2, 5, 7, 4]

numbers.sort()

numbers.reverse()

//numbers.sort((a, b) => b - a)
console.log(numbers)

let fruits = ['orange', 'banana', 'kiwi', 'dsa', 'apple', 'aapple']

fruits.sort()

fruits.reverse()
console.log(fruits)

const items = [
  {
    name: 'Bike',
    price: 100,
  },
  {
    name: 'Mercedec',
    price: 50.0,
  },
  { name: 'TV', price: '200' },
  {
    name: 'Computer',
    price: 70,
  },
]

const filteredItems = items.find((item) => {
  return item.name === 'Bike'
})

console.log(filteredItems)

export default function App() {
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState([])

  return (
    <div>
      <h3>Todo List</h3>

      <TodoForm
        setInputValue={setInputValue}
        inputValue={inputValue}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodoActions from './components/Todos/TodosActions';
import './App.css';

function App() {
    const [todos, setTodods] = useState([]);
    const addTodoHandler = (text) => {
        const newTodo = {
            text: text,
            isCompleted: false,
            id: uuidv4(),
        };

        setTodods([...todos, newTodo]);
    };
    const deleteTodoHandler = (id) => {
        setTodods(todos.filter((todo) => todo.id !== id));
    };
    const toggleTodoHamdler = (id) => {
        setTodods(
            todos.map((todo) =>
                todo.id === id
                    ? { ...todo, isCompleted: !todo.isCompleted }
                    : { ...todo }
            )
        );
    };

    const resetTodosHandler = () => {
        setTodods([]);
    };

    const deleteCompletedTodosHandler = () => {
        setTodods(todos.filter((todo) => !todo.isCompleted));
    };

    const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

    return (
        <div className="App">
            <h1>Todo App</h1>
            <TodoForm addTodo={addTodoHandler} />
            {!!todos.length && (
                <TodoActions
                    completedTodosExist={!!completedTodosCount}
                    deleteCompletedTodos={deleteCompletedTodosHandler}
                    resetTodos={resetTodosHandler}
                />
            )}

            <TodoList
                todos={todos}
                deleteTodo={deleteTodoHandler}
                toggleTodo={toggleTodoHamdler}
            />
            {completedTodosCount > 0 && (
                <h2>
                    You have completed {completedTodosCount}
                    {completedTodosCount > 1 ? ' todos' : ' todo'}
                </h2>
            )}
        </div>
    );
}

export default App;

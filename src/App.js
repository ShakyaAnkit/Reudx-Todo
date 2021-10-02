import React from "react";
import "./App.css";
import Input from "./components/Input";
import TodoItem from './components/TodoItem'

const todoList = [
    {
    item: 'todo1',
    done: false,
    id: 291739646491
    },
    {
    item: 'todo2',
    done: true,
    id: 291739686491
    }
]


function App() {
    return (
        <div className="app">
            <div className="app__container">
                <div className="app__todoContainer">
                {
                    todoList.map(item => (
                        <TodoItem 
                            name={item.item}
                            done={item.done}
                            id={item.id}
                        />
                    ))
                }
                </div>
                <Input />
            </div>
        </div>
    );
}

export default App;

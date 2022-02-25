import React, { Component } from 'react'
import Item from '../Item';
import './index.css'

export default class List extends Component {
    render() {
        const {todos, delTodo, changeTodo} = this.props;
        return (
            <div className="list">
                <ul className="todo_list">
                {
                    todos.map((todo) => {
                        return <Item key={todo.id} todo={todo} delTodo={delTodo} changeTodo={changeTodo} />
                    })
                }
            </ul>
            </div>
        )
    }
}

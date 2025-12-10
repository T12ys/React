import React, {Component} from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import "./app.css"
import ItemAddForm from "../item-add-forms";

export default class App extends Component {

    state = {
        todos:[
            {label: "Выйти на перемену", important: false, id:1},
            {label: "Курение вредно", important: true, id:2},
            {label: "А муха тоже вертолет.", important: false, id:3},
            {label: "Но без корбки передач.", important: false, id:4}
        ]
    }
    onDeleted = (id) => {
       this.setState(({todos})=>{
           const index = todos.findIndex(item=>item.id === id);
           const newTodos = [
               ...todos.slice(0,index),
               ...todos.splice(index+1)
           ];
           return {
               todos: newTodos
           }
       })
    }

    maxId = 4 ;

    addItem = (label , important ) => {
        this.setState(({ todos }) => {
            const newItem = {
                label,
                important: important,
                id: this.maxId++
            };

            return {
                todos: [...todos, newItem]
            };
        });
    };

    render(){
        return (
            <div className="App">
                <AppHeader todo={1} done={3}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>

                <TodoList
                    todos={this.state.todos}
                    onDeleted={this.onDeleted}/>
                <ItemAddForm onItemAdded={this.addItem} />
            </div>
        )
    }

}


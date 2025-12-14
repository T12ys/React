import React, {Component} from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import "./app.css"
import ItemAddForm from "../item-add-forms";

export default class App extends Component {
    maxId = 100
    state = {
        todos:[
            {label: "Выйти на перемену", important: false, id:1, done: false},
            {label: "Курение вредно", important: true, id:2, done: false},
            {label: "А муха тоже вертолет.", important: false, id:3, done: false},
            {label: "Но без корбки передач.", important: false, id:4, done: false},
        ],
        filter: 'all',
        search:''
    }

    onDeleted = (id) => {
        this.setState(({todos})=>{
            const index = todos.findIndex(item=>item.id === id);
            const newTodos = [
                ...todos.slice(0,index),
                ...todos.slice(index+1)
            ];
            return {
                todos: newTodos
            }
        })
    }

    onItemAdded = (text) => {
        this.setState(({todos})=>{
            const newItem = {
                label:text,
                important:false,
                id: this.maxId++,
                done: false
            }
            const newTodos = [
                ...todos,
                newItem
            ];
            return {
                todos: newTodos
            }
        })
    }

    toggleProperty =(arr, id, propName)=>{
        const idx = arr.findIndex(item=>item.id === id);
        const oldItem = arr[idx];
        const value = !oldItem[propName];
        const item = {...arr[idx], [propName]: value};
        return [
            ...arr.slice(0, idx),
            item,
            ...arr.slice(idx+1)
        ]
    }

    onToggleDone = (id) => {
        this.setState(({todos})=>{
            const items = this.toggleProperty(todos, id, 'done');
            return {todos:items}
        })
    }

    onToggleImportant = (id) => {
        this.setState(({todos})=>{
            const items = this.toggleProperty(todos, id, 'important');
            return {todos:items}
        })
    }

    onSearchChange = (search) => {
        this.setState({search:search})
    }

    onFilterChange = (filter) => {
        this.setState({filter:filter})
    }

    searchItems(items, search){
        if(search.length === 0){ return items}
        return items.filter((item)=>{
            return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1
        })
    }

    filterItems(items, filter){
        switch(filter){
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items;
        }
    }

    render(){
        const {todos, filter, search} = this.state;
        const doneCount = todos.filter((item)=> item.done).length;
        const todoCount = todos.length - doneCount;

        const visibleItems = this.filterItems(
            this.searchItems(todos, search),
            filter
        );

        return (
            <div className="App">
                <AppHeader todo={todoCount} done={doneCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel
                        onSearchChange={this.onSearchChange}/>
                    <ItemStatusFilter
                        filter={filter}
                        onFilterChange={this.onFilterChange}/>
                </div>
                <TodoList
                    todos={visibleItems}
                    onToggleDone = {this.onToggleDone}
                    onToggleImportant = {this.onToggleImportant}
                    onDeleted={this.onDeleted}/>
                <ItemAddForm onItemAdded={this.onItemAdded}/>
            </div>
        )
    }
}
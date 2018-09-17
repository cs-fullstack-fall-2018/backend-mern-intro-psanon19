import React, { Component } from 'react';
import './App.css';
import ToDoList from "./ToDoList";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[{
                username:" ",
                todo: " ",
                isDone: false
            },

                {
                    username:" ",
                    todo: " ",
                    isDone: false
                }]

        }
    }

    deleteById(id){
        console.log("Delete by id"+ id);
        fetch('/api/Todo',
            {
                method: "DELETE",
                body: JSON.stringify({"id":id}),
                headers:{
                    'Content-Type': 'application/json',
                }
            })
            .then(data => data.json());
    }


    render() {
        fetch('/api/Todo/DrWilly')
            .then(data =>
                data.json())
            .then(response=> this.setState({data: response}));


        return (
            <div className="App">
                <ToDoList arr={this.state.data}
                            deleteFunction= {this.deleteById}/>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
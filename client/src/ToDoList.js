import React, {Component} from 'react'

class ToDoList extends Component {

    allItems(
        eachItem){
            let booleanInfo = eachItem.isDone;
            let itemTrue = "done ";
            let itemFalse = "not done ";
            let fetch;
            let i = 1;
            if (booleanInfo === false){
                fetch = itemFalse;

            }

            else if (booleanInfo === true){
                fetch = (itemTrue.strike());

            }


            return (
                <div key={eachItem._id} className='ToDolist'>
                    {(i+i)}<p>{eachItem.username} has to {eachItem.todo} is <u dangerouslySetInnerHTML={{__html: fetch}}>
                        </u></p>
                    <p>{": "+eachItem._id}</p>
                    <button onClick={() => this.props.deleteFunction(eachItem._id)}>Delete</button>

                    <hr/>
                </div>


            )
        }


    render() {
        var forEachItem =
            this.props.arr.map(
                (eachItem) => this.allItems(eachItem));


        return (
            <div>
                <h2>{forEachItem}</h2>
            </div>
        );
    }
}

export default ToDoList;
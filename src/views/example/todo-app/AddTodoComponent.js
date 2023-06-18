import React from 'react';
import { toast } from 'react-toastify';

class AddTodoComponent extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            title: ""
        }
    }

    handleChangeTitle = (event)=> {
        this.setState({
            title: event.target.value
        })
    }

    handleAddTodo = ()=>{
        let {title} = this.state;
        let {currentId} = this.props;
        if(title == ""){
            //alert("Title is not null");
            toast.error(`Tiêu đề Todo không được bỏ trống`)
            return;
        }
        let todo = {
            id: currentId + 1, 
            title: title
        }
        this.props.addTodo(todo);
    }

    render(){
        return (
            <div className='add-todo'>
                <h2>Add Todo</h2>
                <input type='text' value={this.state.title} onChange={(event)=>this.handleChangeTitle(event)}/>
                <button type='button' onClick={()=>this.handleAddTodo()}>Add</button>
            </div>
        )
    }
}

export default AddTodoComponent;
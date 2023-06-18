import React from 'react';
import AddTodoComponent from './AddTodoComponent';
import { toast } from 'react-toastify';

class TodoAppComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listTodos: [
                { id: 1, title: 'Doing homework' },
                { id: 2, title: 'Making videos' },
                { id: 3, title: 'Fixing bugs' },
            ],
            currentId: 3,
            editTodo: {}
        }
    }

    handleAddTodo = (todo) => {
        let { listTodos, currentId } = this.state;
        listTodos.push(todo);

        this.setState({
            listTodos: listTodos,
            currentId: currentId + 1
        })
        toast.success("Thêm Todo thành công");
    }

    handleDeleteTodo = (todo) => {
        let { listTodos } = this.state;

        delete listTodos[listTodos.indexOf(todo)];
        this.setState({
            listTodos: listTodos
        })
        toast.success(`Xóa '${todo.title}' thành công`);
    }

    handleEditTodo = (todo) => {
        let { editTodo, listTodos } = this.state;

        let isEmptyObj = Object.keys(editTodo).length === 0;

        //save
        if (isEmptyObj === false && editTodo.id === todo.id) {

            let listTodosCopy = [...listTodos];

            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id));

            listTodosCopy[objIndex].title = editTodo.title;

            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })
            toast.success("Update todo succeed!")
            return;
        }

        //edit
        this.setState({
            editTodo: todo
        })
    }

    handleOnchangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let { listTodos, currentId, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        console.log('>>> check empty object: ', isEmptyObj)

        let todoListElement = listTodos.map((item, index) => {
            return (
                <div className="todo-child" key={item.id}>
                    {isEmptyObj === true ?
                        <span> {index + 1} - {item.title} </span>
                        :
                        <>
                            {editTodo.id === item.id ?
                                <span>
                                    {index + 1} - <input
                                        value={editTodo.title}
                                        onChange={(event) => this.handleOnchangeEditTodo(event)}
                                    />
                                </span>
                                :
                                <span>
                                    {index + 1} - {item.title}
                                </span>
                            }
                        </>

                    }
                    <button className="edit"
                        onClick={() => this.handleEditTodo(item)}
                    >
                        {isEmptyObj === false && editTodo.id === item.id ?
                            'Save' : 'Edit'
                        }

                    </button>
                    <button className="delete"
                        onClick={() => this.handleDeleteTodo(item)}

                    >Delete</button>
                </div>
            )
        })
        return (
            <div className='list-todo-containter'>
                <AddTodoComponent addTodo={this.handleAddTodo} currentId={currentId} />

                <div className='list-todo-content'>
                    <h2>List todo: </h2>
                    {todoListElement}
                </div>
            </div>
        );
    }
}

export default TodoAppComponent;
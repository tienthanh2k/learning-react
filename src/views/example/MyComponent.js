import React from 'react';
import ChildComponent from './ChildComponent';
import FunctionChildComponent from './FunctionChildComponent';

class MyComponent extends React.Component {

    products = [
        { title: 'Cabbage', id: 1 },
        { title: 'Garlic', id: 2 },
        { title: 'Apple', id: 3 },
      ];

    constructor(props){
        super(props);

        // Define State
        this.state = {
            name: 'Thanhnt10',
            age: 20,
            message: "",
            firstName: "Thanhnt10",
            lastName: "ABC",
            jobDes: [
                {
                    id: 1,
                    name: 'teacher'
                },
                {
                    id: 2,
                    name: 'docter'
                },
                {
                    id: 3,
                    name: 'develop'
                }
            ]
        }
    }
    
    handleAlert = ()=> {
        alert("Hello JSX");
    }

    handleChangeInput = (event) => {
        //console.log(event)
        this.setState({
            message: event.target.value
        })
    }
    handleChangeFirstName = (event)=> {
        this.setState({
            firstName: event.target.value
        })
    }
    handleChangeLastName = (event)=> {
        this.setState({
            lastName: event.target.value
        })
    }
    handleSubmit = (event)=> {
        event.preventDefault();
        // 
        console.log(this.state)
    }

    render(){
        const listItems = this.products.map(product =>
            <li key={product.id}>
              {product.title}
            </li>
          );

        return (
            <div>
                Hello JSX {this.state.name}
                Age: {this.state.age}
                Msg: {this.state.message}
                <div>
                    <button onClick={() => this.handleAlert()}>Click me to alert</button>
                </div>
                <input onChange={(event)=> this.handleChangeInput(event)} />
                <div>
                    <div>List Product</div>
                    <ul>{listItems}</ul>
                </div>
                <form>
                    <label htmlFor="fname">First name: </label><br/>
                    <input 
                        type='text'
                        value={this.state.firstName}
                        onChange={(event)=>this.handleChangeFirstName(event)}
                    />
                    <label htmlFor="fname">Last name: </label><br/>
                    <input 
                        type='text'
                        value={this.state.lastName}
                        onChange={(event)=>this.handleChangeLastName(event)}
                    />
                    <input type='submit' value="Submit" onClick={(event)=>this.handleSubmit(event)} />
                </form>
                <ChildComponent name={'Child 1'} jobDes={this.state.jobDes} />
                <FunctionChildComponent name={'Child 2'} jobDes={this.state.jobDes} />
            </div>
        )
    }
}

export default MyComponent;
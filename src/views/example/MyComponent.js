import React from 'react';

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
            message: ""
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
            </div>
        )
    }
}

export default MyComponent;
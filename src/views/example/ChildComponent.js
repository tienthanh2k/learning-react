import React from 'react';

class ChildComponent extends React.Component {

    
    constructor(props){
        super(props);

        // Define State
        this.state = {
            name: 'Thanhnt10',
            age: 20,
            message: "",
            firstName: "Thanhnt10",
            lastName: "ABC"
        }
    }
    
    render(){
        let {jobDes} = this.props;

        let jobDesElement = jobDes.map((item, index)=> {
            return (
                <div key={index}>{item.id} - {item.name}</div>
            )
        })

        return (
            <div>
                Child Component {this.props.name}
                {jobDesElement}
            </div>
        )
    }
}

export default ChildComponent;
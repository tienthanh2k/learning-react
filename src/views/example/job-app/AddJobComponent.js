import React from 'react';

class AddJobComponent extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <form>
                    <label htmlFor="fname">Job name: </label><br/>
                    <input 
                        type='text'
                        value={this.props.jobName}
                        onChange={(event)=>this.props.changeJobName(event)}
                    /><br/>
                    
                    <label htmlFor="fsalary">Salary: </label><br/>
                    <input 
                        type='number'
                        value={this.props.salary}
                        onChange={(event)=>this.props.changeSalary(event)}
                    /><br/>
                    <input type='submit' value="Submit" onClick={(event)=>this.props.addJob(event)} />
                </form>
            </div>
        )
    }
}

export default AddJobComponent;
import React from 'react';

class ListJobsComponent extends React.Component {
    constructor(props){
        super(props);
    }

    handleDeleteJob = (job)=> {
        this.props.deleteJob(job);
    }

    render(){
        let {jobArray} = this.props;

        let jobElement = jobArray.map((item, index)=> {
            return (
                <div key={index}>{item.jobName} - {item.salary} $ <button onClick={()=> this.handleDeleteJob(item)}>Delete</button></div>
            )
        })

        return (
            <div>
                {jobElement}
            </div>
        )
    }
}

export default ListJobsComponent;
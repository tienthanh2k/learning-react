import React from 'react';
import AddJobComponent from './AddJobComponent';
import ListJobsComponent from './ListJobsComponent';

class JobAppComponent extends React.Component {
    constructor(props){
        super(props);

        // define state
        this.state = {
            jobName: '',
            salary: 0,
            jobArray: [

            ]
        }
    }

    handleChangeJobName = (event)=> {
        this.setState({
            jobName: event.target.value
        })
    }

    handleChangeSalary = (event)=> {
        this.setState({
            salary: event.target.value
        })
    }

    handleAddJob = (event)=> {
        event.preventDefault();

        let {jobArray, jobName, salary} = this.state;
        jobArray.push({
            jobName: jobName,
            salary: salary
        })
        this.setState({
            jobArray: jobArray,
            jobName: '',
            salary: 0
        })
    }

    handleDeleteJob = (job)=> {
        let {jobArray} = this.state;
        console.log(job);

        delete jobArray[jobArray.indexOf(job)];
        this.setState({
            jobArray: jobArray,
            jobName: '',
            salary: 0
        })
    }

    render(){
        let {jobName, salary, jobArray} = this.state;
        return (
            <div>
                <h2>Job Manager</h2>
                <AddJobComponent 
                    jobName={jobName} 
                    salary={salary} 
                    changeJobName={(event) => this.handleChangeJobName(event)}
                    changeSalary={(event) => this.handleChangeSalary(event)}
                    addJob = {(event)=> this.handleAddJob(event)}
                />
                <h3>List Jobs</h3>
                <ListJobsComponent 
                    jobArray={jobArray} 
                    deleteJob = {this.handleDeleteJob}
                />
            </div>
        )
    }
}

export default JobAppComponent;